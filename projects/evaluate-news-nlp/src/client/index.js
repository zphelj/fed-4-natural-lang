// Need to import or webpack won't know it exists
import { test_url } from './js/testurl'
import { handleURLsubmit } from './js/handleURLsubmit'
import { UpdatePage } from './js/handleURLsubmit'
import { urlNLP } from './js/handleURLsubmit'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

export { // need to export to the named Output webpack library
  test_url,
  urlNLP,
  UpdatePage,
  handleURLsubmit
}