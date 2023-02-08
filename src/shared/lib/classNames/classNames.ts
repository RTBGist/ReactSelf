type Mods = Record<string, boolean | string> // object { string: boolean | string }

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
	return [
			cls,
			...additional.filter(Boolean),
			...Object.entries(mods)
					.filter(([className, value]) => Boolean(value)) // вернули только значение, где value === true
					.map(([className, value]) => className) // забрали только классы, флаги выкинули
	]
			.join(' ');
}

