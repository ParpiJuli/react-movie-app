export interface TitleAndDetailType {
  titleSize?: string,
  title: string,
  detail?: string | string[] | number | null,
  titleClass?: string,
  detailClass?: string,
  isMainTitle?: boolean,
}

export interface TitleDescriptionProps {
  $size?: string,
  $class: string,
  $isMainTitle?: boolean
}

export interface SectionTitleProps {
  $isMainTitle?: boolean
  $size?: string,
}

export interface SectionTitleType {
  title: string,
  isMainTitle?: boolean
  size?: string,
}
