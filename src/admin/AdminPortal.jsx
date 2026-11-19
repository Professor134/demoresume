import { createElement, useEffect, useRef, useState } from "react";
import {
  ArrowDownToLine,
  ArrowLeft,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronUp,
  CloudUpload,
  ExternalLink,
  FileImage,
  Film,
  GripVertical,
  GraduationCap,
  LayoutDashboard,
  Link as LinkIcon,
  LogOut,
  Palette,
  Plus,
  Save,
  Send,
  ShieldCheck,
  Trash2,
  UserRound,
  Wrench,
} from "lucide-react";
import PcRive from "pc-rive";
import { defaultPortfolio, getDefaultSkillPosition } from "../data/portfolio";
import "./admin.css";

const REPO_SETTINGS_KEY = "portfolio-github-settings";
const MAX_IMAGE_SIZE = 2 * 1024 * 1024;
const MAX_VIDEO_SIZE = 10 * 1024 * 1024;
const palette = ["#16a34a", "#7c3aed", "#2563eb", "#e11d48", "#d97706", "#0891b2", "#db2777", "#334155"];

const sections = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "hero", label: "Home page", icon: UserRound },
  { id: "about", label: "About & timeline", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "projects", label: "Projects", icon: BriefcaseBusiness },
  { id: "contact", label: "Contact & footer", icon: LinkIcon },
  { id: "design", label: "Brand & design", icon: Palette },
  { id: "publishing", label: "Publishing", icon: CloudUpload },
];

function useSortableList(items, onChange) {
  const draggedIndex = useRef(null);

  const move = (from, to) => {
    if (from < 0 || from >= items.length || to < 0 || to >= items.length || from === to) return;
    const reordered = [...items];
    const [item] = reordered.splice(from, 1);
    reordered.splice(to, 0, item);
    onChange(reordered);
  };

  return {
    move,
    onDragStart(event, index) {
      draggedIndex.current = index;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", String(index));
    },
    onDragEnd() {
      draggedIndex.current = null;
    },
    onDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    },
    onDrop(event, to) {
      event.preventDefault();
      const draggedValue = event.dataTransfer.getData("text/plain");
      const from = draggedValue === "" ? draggedIndex.current : Number(draggedValue);
      if (Number.isInteger(from)) move(from, to);
      draggedIndex.current = null;
    },
  };
}

function SortControls({ index, count, sort, label }) {
  return (
    <div className="admin-sort-controls">
      <button
        type="button"
        className="admin-drag-handle"
        draggable="true"
        aria-label={`Drag to reorder ${label}`}
        title="Drag to reorder"
        onDragStart={(event) => sort.onDragStart(event, index)}
        onDragEnd={sort.onDragEnd}
      >
        <GripVertical size={17} />
      </button>
      <div className="admin-sort-arrows">
        <button type="button" aria-label={`Move ${label} up`} title="Move up" disabled={index === 0} onClick={() => sort.move(index, index - 1)}><ChevronUp size={14} /></button>
        <button type="button" aria-label={`Move ${label} down`} title="Move down" disabled={index === count - 1} onClick={() => sort.move(index, index + 1)}><ChevronDown size={14} /></button>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, multiline = false, type = "text", hint = "" }) {
  const Control = multiline ? "textarea" : "input";
  return (
    <label className="admin-field">
      <span>{label}</span>
      <Control
        type={multiline ? undefined : type}
        rows={multiline ? 4 : undefined}
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
      />
      {hint && <small>{hint}</small>}
    </label>
  );
}

function ImageField({ label, value, onChange }) {
  const [error, setError] = useState("");

  const readImage = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Choose an image file.");
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      setError("Images must be 2 MB or smaller. Use an image URL for larger files.");
      return;
    }
    setError("");
    const reader = new FileReader();
    reader.onload = () => onChange(String(reader.result));
    reader.onerror = () => setError("The image could not be read.");
    reader.readAsDataURL(file);
    event.target.value = "";
  };

  return (
    <div className="admin-field">
      <span>{label}</span>
      <div className="admin-image-row">
        {value ? (
          <img className="admin-image-preview" src={value} alt={`${label} preview`} />
        ) : (
          <span className="admin-image-empty"><FileImage size={20} /></span>
        )}
        <div className="admin-image-controls">
          <input
            aria-label={`${label} URL`}
            value={value ?? ""}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Paste an image URL or /public-file.png"
          />
          <label className="admin-upload-button">
            <ArrowDownToLine size={15} /> Upload image
            <input type="file" accept="image/*" onChange={readImage} />
          </label>
        </div>
      </div>
      {error && <small className="admin-error">{error}</small>}
      <small>Uploaded images up to 2 MB are included in the portfolio JSON.</small>
    </div>
  );
}

function VideoField({ label, value, onChange, hint = "" }) {
  const [error, setError] = useState("");

  const readVideo = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("video/")) {
      setError("Choose a video file.");
      event.target.value = "";
      return;
    }
    if (file.size > MAX_VIDEO_SIZE) {
      setError("Videos must be 10 MB or smaller. Use a URL or public path for larger files.");
      event.target.value = "";
      return;
    }

    setError("");
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== "string") {
        setError("The video could not be read.");
        return;
      }
      onChange(reader.result);
    };
    reader.onerror = () => setError("The video could not be read.");
    reader.readAsDataURL(file);
    event.target.value = "";
  };

  return (
    <div className="admin-field">
      <span>{label}</span>
      <div className="admin-image-row">
        {value ? (
          <video className="admin-video-preview" src={value} muted controls preload="metadata" />
        ) : (
          <span className="admin-image-empty"><Film size={20} /></span>
        )}
        <div className="admin-image-controls">
          <input
            aria-label={`${label} URL`}
            value={value ?? ""}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Paste a hosted video URL or /public-file.mp4"
          />
          <label className="admin-upload-button">
            <ArrowDownToLine size={15} /> Upload video
            <input type="file" accept="video/*" onChange={readVideo} />
          </label>
        </div>
      </div>
      {error && <small className="admin-error">{error}</small>}
      <small>{hint || "Uploaded videos up to 10 MB are embedded in the portfolio JSON; use a URL for larger files."}</small>
    </div>
  );
}

function SectionMediaEditor({ label, value, onChange }) {
  const update = (key, nextValue) => onChange({ ...value, [key]: nextValue });
  return (
    <div className="admin-section-media">
      <h3>{label} background</h3>
      <ImageField label={`${label} background image`} value={value.image} onChange={(image) => update("image", image)} />
      <VideoField label={`${label} background video`} value={value.video} onChange={(video) => update("video", video)} hint="Upload a video up to 10 MB, or paste a hosted URL/public path. Video takes priority over the image." />
      <label className="admin-field admin-opacity-field">
        <span>Media opacity: {Math.round((Number(value.opacity) || 0) * 100)}%</span>
        <input
          type="range"
          min="0"
          max="0.85"
          step="0.05"
          value={value.opacity ?? 0.24}
          onChange={(event) => update("opacity", Number(event.target.value))}
        />
      </label>
    </div>
  );
}

function StringList({ title, items, onChange, placeholder }) {
  const safeItems = Array.isArray(items) ? items : [];
  const sort = useSortableList(safeItems, onChange);
  return (
    <div className="admin-list">
      <div className="admin-list-heading">
        <strong>{title}</strong>
        <button type="button" className="admin-icon-button" onClick={() => onChange([...safeItems, ""])}>
          <Plus size={16} /> Add
        </button>
      </div>
      {safeItems.map((item, index) => (
        <div
          className="admin-sortable-entry admin-list-row"
          key={`${index}-${item}`}
          onDragOver={sort.onDragOver}
          onDrop={(event) => sort.onDrop(event, index)}
        >
          <SortControls index={index} count={safeItems.length} sort={sort} label={`${title} ${index + 1}`} />
          <input
            aria-label={`${title} ${index + 1}`}
            value={item}
            placeholder={placeholder}
            onChange={(event) => onChange(safeItems.map((entry, i) => i === index ? event.target.value : entry))}
          />
          <button type="button" aria-label={`Remove ${title} ${index + 1}`} className="admin-remove" onClick={() => onChange(safeItems.filter((_, i) => i !== index))}>
            <Trash2 size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}

function TimelineEditor({ title, items, onChange }) {
  const safeItems = Array.isArray(items) ? items : [];
  const sort = useSortableList(safeItems, onChange);
  const update = (index, key, value) => onChange(safeItems.map((item, i) => i === index ? { ...item, [key]: value } : item));
  return (
    <div className="admin-list">
      <div className="admin-list-heading">
        <strong>{title}</strong>
        <button type="button" className="admin-icon-button" onClick={() => onChange([...safeItems, { period: "", detail: "" }])}>
          <Plus size={16} /> Add
        </button>
      </div>
      {safeItems.map((item, index) => (
        <div className="admin-sortable-entry" key={`${title}-${index}`} onDragOver={sort.onDragOver} onDrop={(event) => sort.onDrop(event, index)}>
          <SortControls index={index} count={safeItems.length} sort={sort} label={`${title} ${index + 1}`} />
          <div className="admin-repeat-card">
            <input aria-label={`${title} period ${index + 1}`} placeholder="Year or date range" value={item.period ?? ""} onChange={(event) => update(index, "period", event.target.value)} />
            <input aria-label={`${title} details ${index + 1}`} placeholder="School, degree, role or organization" value={item.detail ?? ""} onChange={(event) => update(index, "detail", event.target.value)} />
            <button type="button" aria-label={`Remove ${title} ${index + 1}`} className="admin-remove" onClick={() => onChange(safeItems.filter((_, i) => i !== index))}><Trash2 size={16} /></button>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectEditor({ items, onChange }) {
  const sort = useSortableList(items, onChange);
  const update = (index, key, value) => onChange(items.map((item, i) => i === index ? { ...item, [key]: value } : item));
  return (
    <div className="admin-list">
      <div className="admin-list-heading">
        <strong>Project cards</strong>
        <button type="button" className="admin-icon-button" onClick={() => onChange([...items, { name: "", description: "", bgImage: "", link: "", tags: [] }])}><Plus size={16} /> Add project</button>
      </div>
      {items.map((project, index) => (
        <div className="admin-sortable-entry admin-sortable-project" key={`${index}-${project.name}`} onDragOver={sort.onDragOver} onDrop={(event) => sort.onDrop(event, index)}>
          <SortControls index={index} count={items.length} sort={sort} label={`project ${index + 1}`} />
          <details className="admin-repeat-card admin-project-card">
            <summary>
              {project.name || `New project ${index + 1}`}
              <button type="button" aria-label={`Remove project ${index + 1}`} className="admin-remove" onClick={(event) => { event.preventDefault(); onChange(items.filter((_, i) => i !== index)); }}>
                <Trash2 size={15} />
              </button>
            </summary>
            <div className="admin-grid two">
              <Field label="Project name" value={project.name} onChange={(value) => update(index, "name", value)} />
              <Field label="Project URL" value={project.link} onChange={(value) => update(index, "link", value)} type="url" />
            </div>
            <Field label="Description" value={project.description} onChange={(value) => update(index, "description", value)} multiline />
            <ImageField label="Cover image" value={project.bgImage} onChange={(value) => update(index, "bgImage", value)} />
            <StringList
              title="Technology tags"
              items={project.tags ?? []}
              onChange={(tags) => update(index, "tags", tags)}
              placeholder="Technology or tag"
            />
          </details>
        </div>
      ))}
    </div>
  );
}

function SocialEditor({ items, onChange }) {
  const safeItems = Array.isArray(items) ? items : [];
  const sort = useSortableList(safeItems, onChange);
  const update = (index, key, value) => onChange(safeItems.map((item, i) => i === index ? { ...item, [key]: value } : item));
  return (
    <div className="admin-list">
      <div className="admin-list-heading">
        <strong>Social links</strong>
        <button type="button" className="admin-icon-button" onClick={() => onChange([...safeItems, { label: "", url: "", video: "" }])}><Plus size={16} /> Add link</button>
      </div>
      {safeItems.map((item, index) => (
        <div className="admin-sortable-entry" key={`${index}-${item.label}`} onDragOver={sort.onDragOver} onDrop={(event) => sort.onDrop(event, index)}>
          <SortControls index={index} count={safeItems.length} sort={sort} label={`social link ${index + 1}`} />
          <div className="admin-repeat-card admin-social-card">
            <input aria-label={`Social label ${index + 1}`} placeholder="Platform" value={item.label ?? ""} onChange={(event) => update(index, "label", event.target.value)} />
            <input aria-label={`Social URL ${index + 1}`} placeholder="https://..." value={item.url ?? ""} onChange={(event) => update(index, "url", event.target.value)} />
            <input aria-label={`Social video ${index + 1}`} placeholder="Video file URL" value={item.video ?? ""} onChange={(event) => update(index, "video", event.target.value)} />
            <button type="button" aria-label={`Remove social link ${index + 1}`} className="admin-remove" onClick={() => onChange(safeItems.filter((_, i) => i !== index))}><Trash2 size={16} /></button>
          </div>
        </div>
      ))}
    </div>
  );
}

function getSkillPositions(skills) {
  return skills.map((skill, index) => {
    const position = getDefaultSkillPosition(index);
    return {
      x: Number.isFinite(skill.x) ? Math.min(95, Math.max(5, skill.x)) : position.x,
      y: Number.isFinite(skill.y) ? Math.min(92, Math.max(8, skill.y)) : position.y,
    };
  });
}

function SkillsEditor({ items, onChange }) {
  const skills = Array.isArray(items) ? items : [];
  const sort = useSortableList(skills, onChange);
  const update = (index, key, value) => onChange(skills.map((skill, i) => i === index ? { ...skill, [key]: value } : skill));

  return (
    <div className="admin-skills-list">
      <div className="admin-skill-columns" aria-hidden="true">
        <span>Name</span><span>Icon image</span><span>Level</span><span>X%</span><span>Y%</span><span>Order</span>
      </div>
      {skills.map((skill, index) => (
        <div className="admin-sortable-entry admin-skill-entry" key={`${skill.name}-${index}`} onDragOver={sort.onDragOver} onDrop={(event) => sort.onDrop(event, index)}>
          <div className="admin-skill-row">
            <input aria-label={`Skill name ${index + 1}`} placeholder="Skill name" value={skill.name ?? ""} onChange={(event) => update(index, "name", event.target.value)} />
            <input aria-label={`Skill image ${index + 1}`} placeholder="Image URL" value={skill.image ?? ""} onChange={(event) => update(index, "image", event.target.value)} />
            <input aria-label={`Skill proficiency ${index + 1}`} type="number" min="0" max="100" value={skill.percent ?? 0} onChange={(event) => update(index, "percent", Math.min(100, Math.max(0, Number(event.target.value))))} />
            <input aria-label={`Skill horizontal position ${index + 1}`} type="number" min="5" max="95" value={skill.x ?? 50} onChange={(event) => update(index, "x", Math.min(95, Math.max(5, Number(event.target.value))))} />
            <input aria-label={`Skill vertical position ${index + 1}`} type="number" min="8" max="92" value={skill.y ?? 50} onChange={(event) => update(index, "y", Math.min(92, Math.max(8, Number(event.target.value))))} />
            <div className="admin-skill-actions">
              <SortControls index={index} count={skills.length} sort={sort} label={skill.name || `skill ${index + 1}`} />
              <button type="button" aria-label={`Remove ${skill.name || `skill ${index + 1}`}`} className="admin-remove" onClick={() => onChange(skills.filter((_, i) => i !== index))}><Trash2 size={16} /></button>
            </div>
          </div>
        </div>
      ))}
      <button type="button" className="admin-secondary-button" onClick={() => onChange([...skills, { name: "", image: "", percent: 50, ...getDefaultSkillPosition(skills.length) }])}>
        <Plus size={16} /> Add skill
      </button>
    </div>
  );
}

function SkillPositionEditor({ skills, onChange }) {
  const canvasRef = useRef(null);
  const draggingRef = useRef(null);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [positions, setPositions] = useState(() => getSkillPositions(skills));
  const positionsRef = useRef(positions);

  useEffect(() => {
    if (draggingRef.current !== null) return;
    const nextPositions = getSkillPositions(skills);
    positionsRef.current = nextPositions;
    setPositions(nextPositions);
  }, [skills]);

  const updatePosition = (event) => {
    const index = draggingRef.current;
    const canvas = canvasRef.current;
    if (index === null || !canvas) return;
    const bounds = canvas.getBoundingClientRect();
    const next = positionsRef.current.map((position, positionIndex) => {
      if (positionIndex !== index) return position;
      return {
        x: Math.round(Math.min(95, Math.max(5, ((event.clientX - bounds.left) / bounds.width) * 100))),
        y: Math.round(Math.min(92, Math.max(8, ((event.clientY - bounds.top) / bounds.height) * 100))),
      };
    });
    positionsRef.current = next;
    setPositions(next);
  };

  const finishPosition = () => {
    if (draggingRef.current === null) return;
    const nextPositions = positionsRef.current;
    draggingRef.current = null;
    setDraggingIndex(null);
    onChange((current) => ({
      ...current,
      skills: current.skills.map((skill, index) => ({ ...skill, ...(nextPositions[index] ?? {}) })),
    }));
  };

  return (
    <div className="admin-skill-position-editor">
      <div className="admin-list-heading">
        <strong>Section preview</strong>
        <span>Drag the icons to reposition them. Changes save when you release.</span>
      </div>
      <div
        ref={canvasRef}
        className="admin-skill-canvas"
        onPointerMove={updatePosition}
        onPointerUp={finishPosition}
        onPointerCancel={finishPosition}
      >
        <PcRive src="/parallax_hero.riv" stateMachines="MainStateMachine" autoplay={true} className="admin-skill-rive" />
        {skills.map((skill, index) => {
          const position = positions[index] ?? { x: 50, y: 50 };
          return (
            <button
              type="button"
              key={`${skill.name}-${index}`}
              className={`admin-preview-skill${draggingIndex === index ? " dragging" : ""}`}
              aria-label={`Drag ${skill.name || `skill ${index + 1}`} to reposition`}
              title={`${skill.name} · X ${position.x}% · Y ${position.y}%`}
              style={{ left: `${position.x}%`, top: `${position.y}%` }}
              onPointerDown={(event) => {
                event.preventDefault();
                draggingRef.current = index;
                setDraggingIndex(index);
                event.currentTarget.setPointerCapture(event.pointerId);
              }}
            >
              {skill.image
                ? <img src={skill.image} alt="" draggable="false" />
                : <span>{skill.name?.slice(0, 2) || "?"}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function AccentPicker({ label, value, onChange }) {
  return (
    <div className="admin-field">
      <span>{label}</span>
      <div className="admin-palette">
        {palette.map((color) => (
          <button
            type="button"
            key={color}
            aria-label={`${label}: use ${color}`}
            aria-pressed={value === color}
            style={{ backgroundColor: color }}
            onClick={() => onChange(color)}
          />
        ))}
        <label className="admin-color-custom">
          Custom
          <input type="color" value={value} onChange={(event) => onChange(event.target.value)} />
        </label>
      </div>
    </div>
  );
}

function encodeBase64(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

export default function AdminPortal({ portfolio, onChange, onClose, draftError, hasLocalDraft }) {
  const [credentials, setCredentials] = useState(() => {
    try {
      return { owner: "Professor134", repo: "demoresume", branch: "main", ...JSON.parse(localStorage.getItem(REPO_SETTINGS_KEY) || "{}") };
    } catch {
      return { owner: "Professor134", repo: "demoresume", branch: "main" };
    }
  });
  const [token, setToken] = useState("");
  const [connected, setConnected] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const change = (section, key, value) => onChange((current) => ({ ...current, [section]: { ...current[section], [key]: value } }));
  const saveSettings = () => localStorage.setItem(REPO_SETTINGS_KEY, JSON.stringify(credentials));

  const connect = async (event) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch(`https://api.github.com/repos/${encodeURIComponent(credentials.owner)}/${encodeURIComponent(credentials.repo)}`, {
        headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" },
      });
      if (!response.ok) throw new Error(response.status === 401 ? "GitHub rejected that token." : response.status === 404 ? "Repository not found or token cannot access it." : `GitHub sign-in failed (${response.status}).`);
      const repository = await response.json();
      if (!repository.permissions?.push) throw new Error("This GitHub account needs write access to this repository.");
      saveSettings();
      setConnected(true);
      setNotice(`Connected to ${credentials.owner}/${credentials.repo}.`);
    } catch (requestError) {
      setError(requestError.message || "Could not connect to GitHub.");
    } finally {
      setBusy(false);
    }
  };

  const signOut = () => {
    setConnected(false);
    setToken("");
    setNotice("");
  };

  const publish = async () => {
    setBusy(true);
    setError("");
    setNotice("");
    try {
      const headers = { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" };
      const apiUrl = `https://api.github.com/repos/${encodeURIComponent(credentials.owner)}/${encodeURIComponent(credentials.repo)}/contents/public/portfolio.json`;
      const branchUrl = `https://api.github.com/repos/${encodeURIComponent(credentials.owner)}/${encodeURIComponent(credentials.repo)}/branches/${encodeURIComponent(credentials.branch)}`;
      const branchResponse = await fetch(branchUrl, { headers });
      if (!branchResponse.ok) {
        throw new Error(branchResponse.status === 404
          ? `Branch "${credentials.branch}" was not found in this repository.`
          : `Could not verify branch "${credentials.branch}" (${branchResponse.status}).`);
      }

      const current = await fetch(`${apiUrl}?ref=${encodeURIComponent(credentials.branch)}`, { headers });
      let sha;
      if (current.ok) {
        const file = await current.json();
        sha = file.sha;
      } else if (current.status !== 404) {
        throw new Error(`Could not read the content file (${current.status}).`);
      }

      const update = {
        message: sha ? "Update portfolio content from admin dashboard" : "Create portfolio content from admin dashboard",
        content: encodeBase64(`${JSON.stringify(portfolio, null, 2)}\n`),
        branch: credentials.branch,
      };
      if (sha) update.sha = sha;
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers,
        body: JSON.stringify(update),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.message || `GitHub could not save the content (${response.status}).`);
      }
      setNotice("Published! GitHub saved the portfolio JSON. Your hosting provider will deploy the update.");
    } catch (requestError) {
      setError(requestError.message || "Publishing failed. Your local draft is still saved in this browser.");
    } finally {
      setBusy(false);
    }
  };

  const exportJson = () => {
    const blob = new Blob([`${JSON.stringify(portfolio, null, 2)}\n`], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "portfolio.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return (
          <>
            <SectionHeading title="Home page" description="Update the introduction visitors see first." />
            <div className="admin-grid two">
              <Field label="Greeting" value={portfolio.hero.greeting} onChange={(value) => change("hero", "greeting", value)} />
              <Field label="Name" value={portfolio.hero.name} onChange={(value) => change("hero", "name", value)} />
              <Field label="Role or tagline" value={portfolio.hero.role} onChange={(value) => change("hero", "role", value)} />
              <Field label="Primary button" value={portfolio.hero.primaryButton} onChange={(value) => change("hero", "primaryButton", value)} />
              <Field label="Secondary button" value={portfolio.hero.secondaryButton} onChange={(value) => change("hero", "secondaryButton", value)} />
            </div>
            <ImageField label="Home page illustration" value={portfolio.hero.image} onChange={(value) => change("hero", "image", value)} />
            <StringList title="Intro sentences" items={portfolio.hero.descriptions} onChange={(value) => change("hero", "descriptions", value)} placeholder="A short introduction" />
          </>
        );
      case "about":
        return (
          <>
            <SectionHeading title="About & timeline" description="Edit your biography, education and work experience." />
            <div className="admin-grid two">
              <Field label="Section title" value={portfolio.about.title} onChange={(value) => change("about", "title", value)} />
              <Field label="About heading" value={portfolio.about.heading} onChange={(value) => change("about", "heading", value)} />
              <Field label="Education heading" value={portfolio.about.educationTitle} onChange={(value) => change("about", "educationTitle", value)} />
              <Field label="Experience heading" value={portfolio.about.experienceTitle} onChange={(value) => change("about", "experienceTitle", value)} />
            </div>
            <Field label="Biography" value={portfolio.about.description} onChange={(value) => change("about", "description", value)} multiline />
            <TimelineEditor title="Education" items={portfolio.about.education} onChange={(value) => change("about", "education", value)} />
            <TimelineEditor title="Experience" items={portfolio.about.experience} onChange={(value) => change("about", "experience", value)} />
          </>
        );
      case "skills":
        return (
          <>
            <SectionHeading title="Skills" description="Arrange floating skill badges, set exact X/Y positions, or drag them in the live section preview." />
            <SkillPositionEditor skills={portfolio.skills} onChange={onChange} />
            <SkillsEditor
              items={portfolio.skills}
              onChange={(skills) => onChange((current) => ({ ...current, skills }))}
            />
          </>
        );
      case "projects":
        return (
          <>
            <SectionHeading title="Projects" description="Manage every project card, image, technology tag and destination link." />
            <div className="admin-grid two">
              <Field label="Projects heading" value={portfolio.site.projectsTitle} onChange={(value) => change("site", "projectsTitle", value)} />
              <Field label="Projects introduction" value={portfolio.site.projectsDescription} onChange={(value) => change("site", "projectsDescription", value)} />
              <Field label="GitHub button label" value={portfolio.site.githubButtonLabel} onChange={(value) => change("site", "githubButtonLabel", value)} />
              <Field label="GitHub button URL" value={portfolio.footer.github} onChange={(value) => change("footer", "github", value)} type="url" />
            </div>
            <ProjectEditor items={portfolio.projects} onChange={(value) => onChange((current) => ({ ...current, projects: value }))} />
          </>
        );
      case "contact":
        return (
          <>
            <SectionHeading title="Contact & footer" description="Edit the contact section, social destinations and footer details." />
            <div className="admin-grid two">
              <Field label="Contact form title" value={portfolio.contact.title} onChange={(value) => change("contact", "title", value)} />
              <Field label="Contact email" value={portfolio.contact.email} onChange={(value) => change("contact", "email", value)} type="email" />
              <Field label="Phone" value={portfolio.contact.phone} onChange={(value) => change("contact", "phone", value)} />
              <Field label="Location" value={portfolio.contact.location} onChange={(value) => change("contact", "location", value)} />
            </div>
            <SocialEditor items={portfolio.contact.socials} onChange={(value) => change("contact", "socials", value)} />
            <div className="admin-divider" />
            <div className="admin-grid two">
              <Field label="Footer name" value={portfolio.footer.name} onChange={(value) => change("footer", "name", value)} />
              <Field label="Footer role" value={portfolio.footer.role} onChange={(value) => change("footer", "role", value)} />
              <Field label="Footer location" value={portfolio.footer.location} onChange={(value) => change("footer", "location", value)} />
              <Field label="Footer email" value={portfolio.footer.email} onChange={(value) => change("footer", "email", value)} type="email" />
              <Field label="Footer phone" value={portfolio.footer.phone} onChange={(value) => change("footer", "phone", value)} />
              <Field label="Footer GitHub URL" value={portfolio.footer.github} onChange={(value) => change("footer", "github", value)} type="url" />
              <Field label="Footer quote" value={portfolio.footer.quote} onChange={(value) => change("footer", "quote", value)} />
              <Field label="Footer short bio" value={portfolio.footer.description} onChange={(value) => change("footer", "description", value)} />
            </div>
            <ImageField label="Footer portrait" value={portfolio.footer.portrait} onChange={(value) => change("footer", "portrait", value)} />
          </>
        );
      case "design": {
        const changeThemeColor = (key, value) => change("site", "themeColors", { ...portfolio.site.themeColors, [key]: value });
        const changeSectionBackground = (section, value) => onChange((current) => ({
          ...current,
          site: {
            ...current.site,
            sectionBackgrounds: { ...current.site.sectionBackgrounds, [section]: value },
          },
        }));
        return (
          <>
            <SectionHeading title="Brand & design" description="Adjust global colors, section media and the Rive animations used across the site." />
            <Field label="Website title" value={portfolio.site.title} onChange={(value) => change("site", "title", value)} />
            <div className="admin-grid two">
              <ImageField label="Light-mode logo" value={portfolio.site.logoLight} onChange={(value) => change("site", "logoLight", value)} />
              <ImageField label="Dark-mode logo" value={portfolio.site.logoDark} onChange={(value) => change("site", "logoDark", value)} />
              <ImageField label="Website background image" value={portfolio.site.backgroundImage} onChange={(value) => change("site", "backgroundImage", value)} />
              <VideoField label="Main background video" value={portfolio.site.backgroundVideo} onChange={(value) => change("site", "backgroundVideo", value)} hint="This video is scrubbed by page scroll: down-scroll moves forward and up-scroll reverses it. Upload a video up to 10 MB or use a hosted URL/public path." />
              <Field label="Intro video path or URL" value={portfolio.site.introVideo} onChange={(value) => change("site", "introVideo", value)} hint="Place videos in public/ or use a hosted URL." />
            </div>
            <label className="admin-field admin-opacity-field">
              <span>Main background video opacity: {Math.round((Number(portfolio.site.backgroundVideoOpacity) || 0) * 100)}%</span>
              <input type="range" min="0" max="0.65" step="0.05" value={portfolio.site.backgroundVideoOpacity ?? 0.18} onChange={(event) => change("site", "backgroundVideoOpacity", Number(event.target.value))} />
            </label>
            <label className="admin-field admin-opacity-field">
              <span>Background video scroll speed: {(Number(portfolio.site.backgroundVideoSpeed) || 1).toFixed(2)}×</span>
              <input type="range" min="0.25" max="3" step="0.05" value={portfolio.site.backgroundVideoSpeed ?? 1} onChange={(event) => change("site", "backgroundVideoSpeed", Number(event.target.value))} />
              <small>Adjust how quickly the video advances as you scroll; the full clip still spans the page.</small>
            </label>
            <div className="admin-divider" />
            <SectionHeading title="Section backgrounds" description="Set an independent image or video behind each section. Video is used when both media types are set." />
            <div className="admin-section-media-grid">
              {Object.entries(portfolio.site.sectionBackgrounds).map(([section, background]) => (
                <SectionMediaEditor
                  key={section}
                  label={section.charAt(0).toUpperCase() + section.slice(1)}
                  value={background}
                  onChange={(value) => changeSectionBackground(section, value)}
                />
              ))}
            </div>
            <div className="admin-divider" />
            <SectionHeading title="Component colors" description="Change shared text, surface and border colors for both themes. Accent colors control buttons and highlights." />
            <div className="admin-grid two">
              {Object.entries({
                textLight: "Light theme text",
                textDark: "Dark theme text",
                mutedLight: "Light theme secondary text",
                mutedDark: "Dark theme secondary text",
                surfaceLight: "Light theme panel color",
                surfaceDark: "Dark theme panel color",
                borderLight: "Light theme border",
                borderDark: "Dark theme border",
              }).map(([key, label]) => (
                <Field key={key} label={label} type="color" value={portfolio.site.themeColors[key]} onChange={(value) => changeThemeColor(key, value)} />
              ))}
            </div>
            <div className="admin-divider" />
            <SectionHeading title="Rive animations" description="Choose the Rive files and state machines used by the skills and contact components." />
            <div className="admin-grid two">
              <Field label="Skills Rive file URL or public path" value={portfolio.site.skillRive} onChange={(value) => change("site", "skillRive", value)} />
              <Field label="Skills state machine" value={portfolio.site.skillRiveStateMachine} onChange={(value) => change("site", "skillRiveStateMachine", value)} />
              <Field label="Contact Rive file URL or public path" value={portfolio.site.contactRive} onChange={(value) => change("site", "contactRive", value)} />
              <Field label="Contact state machine" value={portfolio.site.contactRiveStateMachine} onChange={(value) => change("site", "contactRiveStateMachine", value)} />
            </div>
            <div className="admin-grid two">
              <AccentPicker label="Light theme accent" value={portfolio.site.accentLight} onChange={(value) => change("site", "accentLight", value)} />
              <AccentPicker label="Dark theme accent" value={portfolio.site.accentDark} onChange={(value) => change("site", "accentDark", value)} />
            </div>
            <small className="admin-theme-hint">Choose each theme color independently. The defaults are green for light mode and purple for dark mode.</small>
            <label className="admin-checkbox"><input type="checkbox" checked={Boolean(portfolio.site.showIntro)} onChange={(event) => change("site", "showIntro", event.target.checked)} /> Play the intro video on page load</label>
          </>
        );
      }
      case "publishing":
        return (
          <>
            <SectionHeading title="GitHub publishing" description="Publish updates by committing public/portfolio.json to your repository." />
            {!connected ? (
              <form className="admin-publish-form" onSubmit={connect}>
                <p className="admin-security-note"><ShieldCheck size={18} /> Your token is used only in this browser session and is never written to the portfolio file.</p>
                <div className="admin-grid two">
                  <Field label="GitHub owner" value={credentials.owner} onChange={(value) => setCredentials({ ...credentials, owner: value })} />
                  <Field label="Repository" value={credentials.repo} onChange={(value) => setCredentials({ ...credentials, repo: value })} />
                  <Field label="Branch" value={credentials.branch} onChange={(value) => setCredentials({ ...credentials, branch: value })} />
                  <Field label="Fine-grained GitHub token" value={token} onChange={setToken} type="password" hint="Create a token with Contents: Read and write for this repository only." />
                </div>
                <button className="admin-primary-button" disabled={busy || !token.trim()}>{busy ? "Connecting..." : "Connect GitHub"}</button>
                <a className="admin-help-link" href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noreferrer">Create a GitHub token <ExternalLink size={14} /></a>
              </form>
            ) : (
              <div className="admin-publish-card">
                <span className="admin-status-dot" />
                <div><strong>{credentials.owner}/{credentials.repo}</strong><p>Branch: {credentials.branch} · File: public/portfolio.json</p></div>
                <button className="admin-secondary-button" onClick={signOut}>Sign out</button>
                <button className="admin-primary-button" disabled={busy} onClick={publish}><Send size={16} /> {busy ? "Publishing..." : "Publish changes"}</button>
              </div>
            )}
            <div className="admin-info-card">
              <strong>What happens when you publish?</strong>
              <p>GitHub commits your content JSON. Your deployment host rebuilds the site from that file; until that deployment finishes, the live site may still show the previous version. Uploaded images are stored inside the JSON (up to 2 MB each).</p>
            </div>
          </>
        );
      default:
        return (
          <>
            <SectionHeading title={`Welcome, ${portfolio.hero.name}`} description="Manage your portfolio content from one place. Changes are saved as a draft in this browser as you edit." />
            <div className="admin-stat-grid">
              <StatCard label="Projects" value={portfolio.projects.length} icon={BriefcaseBusiness} />
              <StatCard label="Skills" value={portfolio.skills.length} icon={Wrench} />
              <StatCard label="Education entries" value={portfolio.about.education.length} icon={GraduationCap} />
              <StatCard label="Social links" value={portfolio.contact.socials.length} icon={LinkIcon} />
            </div>
            <div className="admin-info-card">
              <strong>{hasLocalDraft ? "Your draft is saved on this device" : "Start editing your portfolio"}</strong>
              <p>Use Preview to see the portfolio with your edits. To make changes appear for visitors on your hosted website, connect GitHub and publish the JSON file.</p>
              <button className="admin-secondary-button" onClick={onClose}><ArrowLeft size={16} /> Back to portfolio</button>
            </div>
            <button className="admin-danger-button" onClick={() => { if (window.confirm("Reset this browser's draft to the original portfolio content?")) onChange(defaultPortfolio); }}>Reset content to defaults</button>
          </>
        );
    }
  };

  if (!connected) {
    return (
      <main className="admin-login-screen">
        <button className="admin-back-link" onClick={onClose}><ArrowLeft size={16} /> Back to portfolio</button>
        <div className="admin-login-card">
          <div className="admin-login-icon"><ShieldCheck size={26} /></div>
          <span className="admin-eyebrow">PORTFOLIO CONTROL ROOM</span>
          <h1>Welcome back</h1>
          <p>Sign in with a repository-scoped GitHub token to open your dashboard and publish website updates.</p>
          <form onSubmit={connect}>
            <Field label="GitHub owner" value={credentials.owner} onChange={(value) => setCredentials({ ...credentials, owner: value })} />
            <Field label="Repository" value={credentials.repo} onChange={(value) => setCredentials({ ...credentials, repo: value })} />
            <Field label="Branch" value={credentials.branch} onChange={(value) => setCredentials({ ...credentials, branch: value })} />
            <Field label="Fine-grained GitHub token" value={token} onChange={setToken} type="password" hint="Requires Contents: Read and write access to this repository." />
            {error && <p className="admin-message error">{error}</p>}
            <button className="admin-primary-button full" disabled={busy || !token.trim()}>{busy ? "Verifying access..." : "Sign in securely"}</button>
          </form>
          <a className="admin-help-link" href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noreferrer">Create a fine-grained token <ExternalLink size={14} /></a>
          <div className="admin-login-footer">
            <button onClick={exportJson}><ArrowDownToLine size={15} /> Export current content</button>
            <span>Token is not stored in your browser or website content.</span>
          </div>
        </div>
      </main>
    );
  }

  const currentLabel = sections.find((section) => section.id === activeSection)?.label ?? "Overview";
  return (
    <main className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-brand"><div className="admin-brand-mark">P</div><div><strong>Portfolio</strong><small>CONTROL ROOM</small></div></div>
        <div className="admin-sidebar-label">WORKSPACE</div>
        <nav aria-label="Dashboard sections">
          {sections.map(({ id, label, icon: Icon }) => (
            <button key={id} className={activeSection === id ? "active" : ""} onClick={() => { setActiveSection(id); setError(""); setNotice(""); }}>
              {createElement(Icon, { size: 18 })}<span>{label}</span>{activeSection === id && <span className="admin-nav-indicator" />}
            </button>
          ))}
        </nav>
        <div className="admin-sidebar-bottom">
          <span className="admin-draft-label"><span className="admin-status-dot" /> {hasLocalDraft ? "Draft saved locally" : "No local draft yet"}</span>
          <button onClick={signOut}><LogOut size={17} /> Sign out</button>
          <button onClick={onClose}><ArrowLeft size={17} /> Back to website</button>
        </div>
      </aside>
      <section className="admin-main">
        <header className="admin-topbar">
          <div><span className="admin-breadcrumb">Dashboard /</span><strong>{currentLabel}</strong></div>
          <div className="admin-top-actions">
            <button className="admin-quiet-button" onClick={onClose}>Preview website <ExternalLink size={14} /></button>
            <button className="admin-primary-button compact" onClick={exportJson}><Save size={16} /> Export JSON</button>
          </div>
        </header>
        <div className="admin-content">
          {draftError && <p className="admin-message error">{draftError}</p>}
          {error && <p className="admin-message error">{error}</p>}
          {notice && <p className="admin-message success"><Check size={16} />{notice}</p>}
          {renderSection()}
        </div>
        {activeSection !== "publishing" && (
          <footer className="admin-save-bar">
            <span><span className="admin-status-dot" /> {hasLocalDraft ? "Draft saved automatically on this device" : "Changes will save on this device as you edit"}</span>
            <button className="admin-primary-button compact" onClick={() => { setActiveSection("publishing"); setNotice(""); }}><CloudUpload size={16} /> Publish website</button>
          </footer>
        )}
      </section>
    </main>
  );
}

function SectionHeading({ title, description }) {
  return <div className="admin-section-heading"><h1>{title}</h1><p>{description}</p></div>;
}

function StatCard({ label, value, icon: Icon }) {
  return <div className="admin-stat-card"><span>{createElement(Icon, { size: 18 })}</span><strong>{value}</strong><small>{label}</small></div>;
}
