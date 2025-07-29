// Selectors
export const saveLocal = (state): String => state.setting.saveLocal;
export const app_name = (state): String => state.setting.setting.app_name.value;
export const theme_scheme = (state): String => state.setting.setting.theme_scheme.value;
export const theme_scheme_direction = (state): String => state.setting.setting.theme_scheme_direction.value;
export const theme_style_appearance = (state): String[] => state.setting.setting.theme_style_appearance.value;
export const theme_color = (state): String => state.setting.setting.theme_color;
export const theme_transition = (state): String => state.setting.setting.theme_transition.value;
export const theme_font_size = (state): String => state.setting.setting.theme_font_size.value;
export const page_layout = (state): String => state.setting.setting.page_layout.value;
export const header_navbar = (state): String => state.setting.setting.header_navbar.value;
export const card_style = (state): String => state.setting.setting.card_style.value;
export const header_banner = (state): String => state.setting.setting.header_banner.value;
export const sidebar_color = (state): String => state.setting.setting.sidebar_color.value;
export const sidebar_type = (state): String[] => state.setting.setting.sidebar_type.value;
export const sidebar_show = (state): String => state.setting.setting.sidebar_show.value;
export const navbar_show = (state): String => state.setting.setting.navbar_show.value;
export const sidebar_menu_style = (state): String  => state.setting.setting.sidebar_menu_style.value;
export const footer = (state): String => state.setting.setting.footer.value;
export const body_font_family = (state): String => state.setting.setting.body_font_family.value;
export const heading_font_family = (state): String => state.setting.setting.heading_font_family.value;

export const settingObj = (state): String => state.setting;
