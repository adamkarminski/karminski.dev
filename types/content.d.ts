import { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface IterableItem {
	key: any
}

export interface Note extends ParsedContent {
	id: string,
	_path: string,
	title: string,
}
