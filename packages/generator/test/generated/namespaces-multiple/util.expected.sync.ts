// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters-template.actual'
import type { Locales, Translations } from './types.actual'
import { loadedFormatters, loadedLocales, locales } from './util.actual'

import en from './en'

import en_test from './en/test'
import en_a from './en/a'
import en_and_another from './en/and-another'
import en_x_y from './en/x y'

const localeTranslations = {
	en: {
		...en,
		test: en_test,
		a: en_a,
		'and-another': en_and_another,
		'x y': en_x_y
	},
}

export const loadLocale = (locale: Locales): void => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = localeTranslations[locale] as unknown as Translations
	loadFormatters(locale)
}

export const loadAllLocales = (): void => locales.forEach(loadLocale)

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale))
