export interface LanguageLayout {
    navbar: {
        buttonText: string;
      };
      mainCard: {
        mainTitle: string;
        mainSubtitle: string;
        firstStepsTitle: string;
      };
      emailForm: {
        emailInputText: string;
        emailSubmitText: string;
        emailErrorText: string;
      };
      storyCard: {
        card1: {
          storyTitle: string;
          storySubtitle: string;
        };
        card2: {
          storyTitle: string;
          storySubtitle: string;
        };
        card3: {
          storyTitle: string;
          storySubtitle: string;
        };
      };
      faq: {
        faqTitle: string;
        question1: string;
        question1Answer: string;
        question2: string;
        question2Answer: string;
        question3: string;
        question3Answer: string;
        question4: string;
        question4Answer: string;
      };
      supportedDevices: {
        devicesTitle: string;
        device1Subtitle: string;
        device2Subtitle: string;
      };
      mainFooter: {
        linkContactUs: string;
        linkHelpCenter: string;
        linkAccount: string;
        linkAboutUs: string;
        linkSpeedTest: string;
        linkPrivacy: string;
        warningMessage: string;
        warningMessageImportant: string;
      };
      languageSelector: {
        languageHungarian: string;
        languageEnglish: string;
      }
      
}