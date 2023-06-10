export type Mods = Record<string, boolean | string | undefined> // object { string: boolean | string | undefined }

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value)) // вернули только значение, где value === true
      .map(([className, _]) => className), // забрали только классы, флаги выкинули
  ]
    .join(' ');
}
