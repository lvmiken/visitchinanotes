import type { CollectionEntry } from "astro:content";
import { getCitySlug } from "./cityEntries";
import { guideStageMap } from "./guideStages";
import { topicMomentMap } from "./topicMoments";
import { siteName } from "./site";

type CityEntry = CollectionEntry<"cities">;
type GuideEntry = CollectionEntry<"guides">;
type TopicEntry = CollectionEntry<"topics">;

interface SocialCardOptions {
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
  accentFrom: string;
  accentTo: string;
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function truncateText(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 1).trimEnd()}...`;
}

function wrapText(value: string, maxCharsPerLine: number, maxLines: number) {
  const words = value.trim().split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let currentLine = "";

  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    const nextLine = currentLine ? `${currentLine} ${word}` : word;

    if (nextLine.length <= maxCharsPerLine) {
      currentLine = nextLine;
      continue;
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    if (lines.length === maxLines - 1) {
      currentLine = [word, ...words.slice(index + 1)].join(" ");
      break;
    }

    currentLine = word;
  }

  if (lines.length < maxLines && currentLine) {
    lines.push(currentLine);
  }

  return lines.slice(0, maxLines).map((line, index, allLines) => {
    if (index !== allLines.length - 1) {
      return line;
    }

    const consumedAllWords = allLines.join(" ").split(/\s+/).filter(Boolean).length >= words.length;
    if (consumedAllWords && line.length <= maxCharsPerLine) {
      return line;
    }

    return truncateText(line, maxCharsPerLine);
  });
}

function renderTextLines(lines: string[], x: number, startY: number, lineHeight: number, fontSize: number) {
  return lines
    .map(
      (line, index) =>
        `<text x="${x}" y="${startY + index * lineHeight}" font-size="${fontSize}" fill="#10243e">${escapeXml(line)}</text>`,
    )
    .join("");
}

export function renderSocialCard({
  eyebrow,
  title,
  description,
  meta,
  accentFrom,
  accentTo,
}: SocialCardOptions) {
  const titleLines = wrapText(title, 28, 3);
  const descriptionLines = wrapText(description, 52, 3);
  const titleStartY = 220;
  const descriptionStartY = 430;

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(title)}</title>
  <desc id="desc">${escapeXml(description)}</desc>
  <defs>
    <linearGradient id="card-bg" x1="60" y1="40" x2="1160" y2="590" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFF7E8" />
      <stop offset="1" stop-color="#F4FBFF" />
    </linearGradient>
    <linearGradient id="card-accent" x1="180" y1="40" x2="980" y2="580" gradientUnits="userSpaceOnUse">
      <stop stop-color="${accentFrom}" />
      <stop offset="1" stop-color="${accentTo}" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" rx="36" fill="url(#card-bg)" />
  <circle cx="1060" cy="110" r="180" fill="${accentFrom}" fill-opacity="0.16" />
  <circle cx="980" cy="520" r="240" fill="${accentTo}" fill-opacity="0.14" />
  <path d="M826 78C950 108 1046 170 1116 264C1023 322 918 340 800 318C770 226 778 146 826 78Z" fill="url(#card-accent)" fill-opacity="0.18" />
  <rect x="48" y="48" width="1104" height="534" rx="30" fill="white" fill-opacity="0.74" stroke="#E5E7EB" />
  <text x="96" y="106" font-size="22" letter-spacing="2.4" font-weight="700" fill="${accentTo}">${escapeXml(eyebrow.toUpperCase())}</text>
  <text x="96" y="148" font-size="24" fill="#475569">${escapeXml(siteName)}</text>
  <g font-family="Georgia, 'Times New Roman', serif" font-weight="700">
    ${renderTextLines(titleLines, 96, titleStartY, 74, 60)}
  </g>
  <g font-family="Georgia, 'Times New Roman', serif">
    ${renderTextLines(descriptionLines, 96, descriptionStartY, 40, 28)}
  </g>
  <rect x="96" y="522" width="420" height="48" rx="24" fill="#FFFFFF" stroke="#D7E4EA" />
  <text x="122" y="553" font-size="24" font-weight="700" fill="#0F172A">${escapeXml(truncateText(meta, 34))}</text>
  <rect x="984" y="504" width="112" height="38" rx="19" fill="${accentFrom}" fill-opacity="0.18" />
  <text x="1012" y="529" font-size="18" font-weight="700" fill="${accentTo}">Editorial</text>
</svg>`;
}

export function getCitySocialImage(city: CityEntry) {
  return city.data.ogImage ?? city.data.heroImage ?? `/og/destinations/${getCitySlug(city)}.svg`;
}

export function getGuideSocialImage(guide: GuideEntry) {
  return guide.data.ogImage ?? guide.data.heroImage ?? `/og/guides/${guide.slug}.svg`;
}

export function getTopicSocialImage(topic: TopicEntry) {
  return topic.data.ogImage ?? topic.data.heroImage ?? `/og/topics/${topic.slug}.svg`;
}

function formatCityLabel(city: string) {
  if (city.toLowerCase() === "xian") {
    return "Xi'an";
  }

  return city
    .split(/[\s-]+/)
    .filter(Boolean)
    .map((part) => `${part[0]?.toUpperCase() ?? ""}${part.slice(1)}`)
    .join(" ");
}

export function getCitySocialCard(city: CityEntry) {
  return renderSocialCard({
    eyebrow: "Destination Hub",
    title: city.data.seoTitle,
    description: city.data.seoDescription,
    meta: `${city.data.name} • ${city.data.suggestedStay}`,
    accentFrom: "#0F766E",
    accentTo: "#155E75",
  });
}

export function getGuideSocialCard(guide: GuideEntry) {
  const stageLabel = guideStageMap[guide.data.guideStage]?.label ?? "Trip Guide";

  return renderSocialCard({
    eyebrow: stageLabel,
    title: guide.data.title,
    description: guide.data.description,
    meta: `${formatCityLabel(guide.data.city)} guide${guide.data.tripLength ? ` • ${guide.data.tripLength}` : ""}`,
    accentFrom: "#1D4ED8",
    accentTo: "#1E3A8A",
  });
}

export function getTopicSocialCard(topic: TopicEntry) {
  const momentLabel = topicMomentMap[topic.data.planningMoment]?.label ?? "Trip Topic";

  return renderSocialCard({
    eyebrow: momentLabel,
    title: topic.data.title,
    description: topic.data.description,
    meta: topic.data.affectsCities.length > 0
      ? `${truncateText(topic.data.affectsCities.join(", "), 30)}`
      : "China trip planning",
    accentFrom: "#B45309",
    accentTo: "#9A3412",
  });
}
