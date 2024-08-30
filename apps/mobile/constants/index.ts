import onboarding1 from "@/assets/images/on_1.png";
import onboarding2 from "@/assets/images/on_2.png";
import onboarding3 from "@/assets/images/on_3.png";
import onboarding4 from "@/assets/images/on_4.png";
import arrowRight from "@/assets/icons/arrow-right-white.png";
import arrowLeft from "@/assets/icons/ArrowLeft.png";
import user from "@/assets/icons/user_text.png";
import email from "@/assets/icons/user_text.png";
import lock from "@/assets/icons/lock.png";
import eyeOff from "@/assets/icons/show_password.png";
import q1 from "@/assets/images/complete_profile.png";
import goal1 from "@/assets/images/goal_1.png";
import goal2 from "@/assets/images/goal_2.png";
import goal3 from "@/assets/images/goal_3.png";
// Exporting images
export const images = {
  onboarding1,
  onboarding2,
  onboarding3,
  onboarding4,
  q1,
  goal1,
  goal2,
  goal3,
};

export const icons = {
  arrowLeft,
  arrowRight,
  user,
  email,
  lock,
  eyeOff,
};

export const onboarding = [
  {
    id: 1,
    title: "Track Your Goal",
    description:
      "Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "Get Burn",
    description:
      "Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever",
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "Eat Well",
    description:
      "Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun",
    image: images.onboarding3,
  },
  {
    id: 3,
    title: "Improve Sleep  Quality",
    description:
      "Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning",
    image: images.onboarding4,
  },
];
export const goals = [
  {
    id: 1,
    title: "Improve Shape",
    description:
      "I have a low amount of body fat and need / want to build more muscle",
    image: images.goal1,
  },
  {
    id: 2,
    title: "Lean & Tone",
    description:
      "I’m “skinny fat”. look thin but have no shape. I want to add learn muscle in the right way",
    image: images.goal2,
  },
  {
    id: 3,
    title: "Lose a Fat",
    description:
      "I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass",
    image: images.goal3,
  },
];
