import { Header } from '@/components/header/Header'
import { LogoName } from '@/components/input-name/LogoName'
import { Buttons } from '@/components/buttons/Buttons'
import { FontCards } from '@/components/font-cards/FontCards'
import { ColorCards } from '@/components/color-cards/ColorCards'
import { createNewPage } from '../core/utils'

export const renderWelcome = createNewPage(
  [Header, Buttons],
  {
    headerTitle: 'Your Logo',
    headerDescription: 'Edit, Download or Share your Saved Logos',
    buttonTitle: 'Create New Logo',
    buttonPage: 'renderWelcome'
  }
)

export const renderInput = createNewPage(
  [Header, LogoName, Buttons],
  {
    headerTitle: 'Free Logo Maker',
    headerDescription: 'Tell us about your business to get started',
    buttonTitle: 'Continue',
    buttonPage: 'renderInput'
  }
)

export const renderFonts = createNewPage(
  [Header, FontCards],
  {
    headerTitle: 'Choose a Style',
    headerDescription: 'Pick your Favorite Font',
    headerDescriptionCounter: true
  }
)

export const renderColors = createNewPage(
  [Header, ColorCards],
  {
    headerTitle: 'Pick your Favorite Color',
    headerDescription: 'What Color works best for ',
    customHeader: true
  }
)

export const renderIcons = createNewPage(
  [Header],
  {
    headerTitle: 'Choose Icons',
    headerDescription: `Search & pick your favorite icons`
  }
)
