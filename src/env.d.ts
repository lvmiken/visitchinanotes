/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_PLANNING_FORM_ENDPOINT?: string;
  readonly PUBLIC_CONTRIBUTION_FORM_ENDPOINT?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
