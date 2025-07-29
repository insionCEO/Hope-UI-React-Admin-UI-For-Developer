import _ from 'lodash'
import { getColorShadeTint } from './colors'
import { getRootVars, setRootVariables, setFontFamily } from './root-var'
import { addClass, removeClass, setAttr, setContent } from './dom'

export const updateBodyClass = (choices, value) => {
    // remove class from choices
    if(choices.length > 0) {
        choices.forEach((other) => {
            removeClass('body', other)
        });
    }
    if(_.isArray(value)) {
        _.forEach(value, (val) => {
            addClass('body', val)
        })
    } else {
        addClass('body', value)
    }
}

export const updateHtmlAttr = (value) => {
    // set direction
    setAttr('html', value)
}

export const updateHtmlClass = (choices, value) => {
    // remove class from choices
    if(choices.length > 0) {
        choices.forEach((other) => {
            removeClass('html', other)
        });
    }
    addClass('html', value)
}

export const updateTitle = (value) => {
    // set title
    setContent('[data-setting="app_name"]', value)
}

export const updateColorRootVar = (theme_scheme, theme_color, choices) => {
    const prefix = getRootVars("--prefix") || "bs-";
    let newColors = {};
    let dark = false
    if (theme_scheme !== 'light' && theme_scheme !== 'auto') {
        dark = true
    }

    _.forEach(theme_color.colors, (value, key) => {
        key = key.replace("{{prefix}}", prefix);
        newColors = {
            ...newColors,
            ...getColorShadeTint(key, value, dark),
        };
    });
    setRootVariables(newColors);
    removeClass("body", choices);
    addClass("body", [theme_color.value]);
}

export const updateDomValueBySetting = (setting, Choices) => {
    updateHtmlAttr({prop: 'dir',  value: setting.theme_scheme_direction.value})
    updateThemeScheme(setting.theme_scheme.value, Choices, setting.theme_color)
    updateHtmlClass(Choices.FSChoice, setting.theme_font_size.value)
    updateBodyClass(Choices.StyleAppearanceChoice, setting.theme_style_appearance.value)
    updateBodyClass(Choices.Animation, setting.theme_transition.value)
    updateTitle(setting.app_name.value)
    setFontFamily('body', setting.body_font_family.value)
    setFontFamily('heading', setting.heading_font_family.value)
}

export const updateStorage = (storage,key,value) => {
    if(typeof value !== typeof undefined && typeof key !== typeof undefined) {
        switch (storage) {
            case 'localStorage':
                sessionStorage.removeItem(key)
                localStorage.setItem(key, JSON.stringify(value))       
                break;

            case 'sessionStorage':
                localStorage.removeItem(key)
                sessionStorage.setItem(key, JSON.stringify(value))
                break;
        
            default:
                localStorage.removeItem(key)
                sessionStorage.removeItem(key)
                localStorage.setItem(key, 'none')
                sessionStorage.setItem(key, 'none')
                break;
        }
    }
}

export const getStorage = (key) => {
    if(localStorage.getItem(key) === 'none' || sessionStorage.getItem(key) === 'none') return 'none'
    if((localStorage.getItem(key) !== null && localStorage.getItem(key) !== '' ) || 
    (sessionStorage.getItem(key) !== null && sessionStorage.getItem(key) !== '')) {
        let value = localStorage.getItem(key)
        if(value === null) value = sessionStorage.getItem(key)
        if (value !== null) {
            try {
                return JSON.parse(value);
            } catch (e) {
                return value
            }
        }
    }
    return null
}


export const updateThemeScheme = (value, Choices, theme_color) => {
    let className = []
    if(value === 'auto') {
        className.push('auto')
        if (matchMedia("(prefers-color-scheme: light)").matches) {
            className.push('light')
        } else {
            className.push('dark')
        }
    } else {
        className.push(value)
    }
    const filterValue = className.filter((x) => x !== 'auto')
    updateBodyClass(Choices.SchemeChoice, className)
    updateColorRootVar(...filterValue, theme_color, Choices.ColorChoice)
}