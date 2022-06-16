import {writable} from 'svelte/store'
import {Page} from "./constants"

export const currPage = writable(Page.UNKNOWN)