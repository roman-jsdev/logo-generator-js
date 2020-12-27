import { Header } from '@/components/header/Header'
import { LogoName } from '@/components/input-name/LogoName'
import { Buttons } from '@/components/buttons/Buttons'
import { AppRender } from '@core/AppRender'

export const renderWelcome = new AppRender('#app', {
  components: [Header, Buttons],
  props: {
    headerTitle: 'Your Logo',
    headerDescription: 'Edit, Download or Share your Saved Logos',
    buttonTitle: 'Create New Logo'
  }
})

export const renderInput = new AppRender('#app', {
  components: [Header, LogoName, Buttons],
  props: {
    headerTitle: 'Free Logo Maker',
    headerDescription: 'Tell us about your business to get started',
    buttonTitle: 'Continue'
  }
})
