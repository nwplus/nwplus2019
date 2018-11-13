import React from 'react';
import { SECTION } from './Sections';
import { QUESTIONS } from './Questions';
import { PrimaryButton } from '../input/buttons';
import { ShowHideTextView } from '../view';
import { Footer } from '../footer';

// first panel
import firstPanelDesktop from '../../assets/local-hack-day/first-panel/scenery-desktop.svg';
import firstPanelMobile from '../../assets/local-hack-day/first-panel/scenery-mobile.svg';

import bearCircle from '../../assets/bear-circle.svg';

const lhdUrl = 'https://localhackday.mlh.io/lhd-2018/events/33-nwplus-at-the-university-of-british-columbia';

const getImage = (alt, src, className = '') => (
  <img
    className={className}
    alt={alt}
    src={src} />
);

const getFaqSection = section => (
  <div>
    <h3>{QUESTIONS[section].title}</h3>
    {
      QUESTIONS[section].questions.map((question) => {
        const labelText = Object.keys(question)[0];
        const dropDownText = question[labelText];
        return (
          <ShowHideTextView
            label={`${labelText}`}
            dropDownText={dropDownText}
            key={labelText}
            className="margin-ends-s fill-width" />
        );
      })
    }
  </div>
);

const ROW_STYLE = 'pad-sides-tera pad-bottom-section scale-pad-sides-laptop container-width';

class LocalHackDay extends React.Component {
  componentDidMount() {
    this.jumpToHash();
  }

  componentDidUpdate() {
    this.jumpToHash();
  }

  jumpToHash = () => {
    const { location: { hash } = {} } = window;
    switch (hash) {
      case SECTION.ABOUT:
        this.aboutDiv.scrollIntoView({ behavior: 'smooth' });
        break;
      case SECTION.STORIES:
        this.storiesDiv.scrollIntoView({ behavior: 'smooth' });
        break;
      case SECTION.FAQ:
        this.faqDiv.scrollIntoView({ behavior: 'smooth' });
        break;
      case SECTION.SPONSORS:
        break;
      default:
    }
  }

  render() {
    return (
      <div className="lhd">

        <div className="first-panel">
          <img className="scenery-desktop fill-width" alt="illustration" src={firstPanelDesktop} />
          <img className="scenery-mobile fill-width" alt="illustration" src={firstPanelMobile} />
          <PrimaryButton text="Register" className="register-button" onClick={() => (window.open(lhdUrl))} />
        </div>

        <div className="overflow-hidden flex jc-center ai-center dir-col">
          <div ref={node => this.faqDiv = node} className={`${ROW_STYLE}`}>
            <h2 className="fill-width margin-bottom-s">Frequently asked questions</h2>
            <div className="flex jc-start faq scale-row-desktop">
              <div className="flex jc-between dir-row margin-right-s">
                <div className="scale-width-desktop fill-width" key={`${'general'}`}>
                  <div className="relative overflow-hidden">
                    {getFaqSection('general')}
                  </div>
                </div>
              </div>
              <div className="flex jc-start dir-col margin-left-s">
                {
                  ['teams_and_projects', 'logistics'].map(section => (
                    <div className="scale-width-desktop jc-start fill-width" key={`${section}`}>
                      <div className="relative overflow-hidden">
                        {getFaqSection(section)}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <p className="fill-min-width margin-top-s">Still have questions? Feel free to email us at <a href="mailto:hello@nwplus.io">hello@nwplus.io</a> or shoot us a message on <a href="https://facebook.com/nwhacks">Facebook</a>.</p>
          </div>

          <div className="sponsors flex jc-center dir-col pad-top-tera">
            {getImage('cute-bear', bearCircle)}
            <p className="primary flex jc-center text-center">
              Stay tuned for sponsor updates!
            </p>
          </div>

          <Footer />
        </div>

      </div>
    );
  }
}

export default LocalHackDay;
