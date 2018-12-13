import React from 'react';

import thinking from '../../assets/emoji/thinking.svg';
import eyes from '../../assets/emoji/eyes.svg';
import backpack from '../../assets/emoji/backpack.svg';

export const QUESTIONS = Object.freeze({
  general: {
    title: (
      <div>
        <img className="vertical-align-top emoji" alt="🤔" src={thinking} /> General
      </div>
    ),
    questions: [{
      'What is Local Hack Day?': (
        <div>
          <p className="margin-top-none">
            Local Hack Day is a 12-hour beginner-friendly hackathon, bringing together students
            passionate about technology to build cool projects together!
          </p>
        </div>
      ),
    },
    {
      'How can I officially sign up?': (
        <p className="margin-top-none">
          Please check back in November 2019 to register for LHD 2019!
        </p>
      ),
    },
    {
      'How much does it cost?': (
        <p className="margin-top-none">
          Nothing! Attending UBC Local Hack Day is entirely free.
        </p>
      ),
    },
    {
      'Who can participate in this hackathon?': (
        <p className="margin-top-none">
          We welcome all students with any technical background and knowledge to join us for
          this event! We encourage teams to be formed with participants with a varied skillset
          to learn more from a variety of team roles.
        </p>
      ),
    },
    {
      'Is Local Hack Day open to all schools and majors?': (
        <p className="margin-top-none">
          Yes! All students are welcome to attend!
        </p>
      ),
    },
    {
      'How do I get to the event?': (
        <p className="margin-top-none">
          We don&apos;t currently offer travel reimbursements, but
          we&apos;ll take good care of you if you can make your way here!
        </p>
      ),
    },
    {
      'Where is the event?': (
        <div>
          <p className="margin-top-none">
            UBC Local Hack Day 2018 will be held in the Hugh Dempster Pavilion
            (DMP 301) at the University of British Columbia, in Vancouver,
            Canada on December 1st, 2018.
          </p>
        </div>
      ),
    },
    {
      'What if I have never been to a hackathon before?': (
        <p className="margin-top-none">
          Don&apos;t worry! The aim of Local Hack Day is ultimately to learn,
          so having experience is not a requirement.
          There will be workshops and mentors ready to help you out and teach you some
          new skills that you can use for your project or for the future!
        </p>
      ),
    },
      // {
      //   "What's it like being a volunteer at nwHacks?": (
      //     <p className="margin-top-none">
      //       {/* Missing on Notion */}
      //     </p>
      //   ),
      // },
    ],
  },
  teams_and_projects: {
    title: (
      <div>
        <img className="vertical-align-top emoji" alt="👀" src={eyes} /> Teams & projects
      </div>
    ),
    questions: [
      {
        'How do teams work?': (
          <p className="margin-top-none">
            Feel free to hack solo or in groups of up to 4 people. (You can hack in larger
            groups but if you win, the prizes are only meant for 4 people so you&apos;ll
            have to divide them up yourselves.) Don&apos;t worry if you don&apos;t have a
            team yet – we&apos;ll have team building activities for you to meet and learn
            from new people!
          </p>
        ),
      },
      {
        "What happens if I don't have a team?": (
          <p className="margin-top-none">
            Don&apos;t worry!
            A lot of hackers just like you are in the same position.
            On the day of the event, we will make sure to pair everyone up with a team
            of hackers so no one gets left out! There will also be an opportunity to connect
            with people and form teams before the event (after you have been chosen to attend).
          </p>
        ),
      },
      {
        'Can I work on my previous projects?': (
          <p className="margin-top-none">
            No, all projects must be built from scratch. However, you are welcome to brainstorm
            ideas beforehand. This rule is strictly adhered to at nwHacks and any team found
            working on previous projects will be automatically disqualified in the event. If
            you are using libraries or tools that you have made in the past, don&apos;t worry, this
            does not apply.
          </p>
        ),
      },
    ],
  },
  logistics: {
    title: (
      <div>
        <img className="vertical-align-top emoji" alt="🎒" src={backpack} /> Logistics
      </div>
    ),
    questions: [
      {
        'What should I bring?': (
          <p className="margin-top-none">
            Bring a valid student ID and government-issued ID for admission, plus a laptop
            and charger for hacking! If you wish, you can also bring any hardware that you
            would like to hack with.
          </p>
        ),
      },
      // {
      //   'Can I come late?': (
      //     <p className="margin-top-none">
      //       {/* Not finalized on Notion */}
      //     </p>
      //   ),
      // },
      {
        'What will I eat?': (
          <p className="margin-top-none">
            We will be providing breakfast, lunch, and dinner, as well as snacks
            and drinks throughout the day to keep you all comfortable as you&apos;re hacking away!
          </p>
        ),
      },
      {
        'I registered, but can no longer attend!': (
          <p className="margin-top-none">
            Please let us know, so that we can open up your spot to a student on the waitlist!
            Since we have a limited capacity, students will be placed on the waitlist, and if
            a spot opens up, we&apos;ll reach out to a waitlisted student.
          </p>
        ),
      },
      {
        'Registration is closed but I still really want to attend!': (
          <p className="margin-top-none">
            Sign up for the waitlist! If a spot opens up, we&apos;ll reach out to you!
          </p>
        ),
      },
      {
        'I have more questions!': (
          <p className="margin-top-none">
            Shoot us an email at lhd (at) nwplus.io!
          </p>
        ),
      },
    ],
  },
});
