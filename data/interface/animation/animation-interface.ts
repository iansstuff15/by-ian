import { RefObject } from 'react'
export interface HeroAnimationParams {
  heroElements: HTMLElement[]
  downloadCVButtonRef: RefObject<HTMLDivElement>
  contactMeButtonRef: RefObject<HTMLDivElement>
  LinkedInContainerRef: RefObject<HTMLDivElement>
  GithubContainerRef: RefObject<HTMLDivElement>
  greetingContainerRef: RefObject<HTMLDivElement>
  imageContainerRef: RefObject<HTMLImageElement>
  background: string
  reverseBackground: string
}

export interface HeaderItemsAnimationParams {
  buttonContainerRef: RefObject<HTMLDivElement>
}

export interface HeaderAnimationProps {
  state: Flip.FlipState
}

export interface SkillAnimationParams {
  titleRef: RefObject<HTMLDivElement>
  subtitleRef: RefObject<HTMLDivElement>
  iconRef: RefObject<HTMLDivElement>
  containerRef: RefObject<HTMLDivElement>
}

export interface ProjectAnimationParams {
  containerRef: RefObject<HTMLDivElement>
  iconRef: RefObject<HTMLDivElement>
  headerRef: RefObject<HTMLHeadingElement>
  header2Ref: RefObject<HTMLHeadingElement>
  titleRef: RefObject<HTMLHeadingElement>
  subTitleRef: RefObject<HTMLHeadingElement>
  statusRef: RefObject<HTMLDivElement>
  snippetRef: RefObject<HTMLDivElement>
  repositoryRef: RefObject<HTMLDivElement>
  websiteRef: RefObject<HTMLDivElement>
  imageRef: RefObject<HTMLDivElement>
}

export interface EducationSectionAnimationParams {
  educationTitleRef: RefObject<HTMLHeadingElement>
  achievementsTitleRef: RefObject<HTMLHeadingElement>
  professionalCertificateTitleRef: RefObject<HTMLHeadingElement>
  otherCertificationTitleRef: RefObject<HTMLHeadingElement>
  containerRef: RefObject<HTMLDivElement>
  otherContainerRef: RefObject<HTMLDivElement>
}

export interface AcademicAnimationParams {
  titleRef: RefObject<HTMLHeadingElement>
  subtitleRef: RefObject<HTMLHeadingElement>
  certifiedDateRef: RefObject<HTMLDivElement>
  buttonRef: RefObject<HTMLDivElement>
  containerRef: RefObject<HTMLDivElement>
  iconRef: RefObject<HTMLDivElement>
}
