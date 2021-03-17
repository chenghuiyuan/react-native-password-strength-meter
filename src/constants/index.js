import { width as deviceWidth } from '../style';

const BAR_PASSWORD_STRENGTH_DISPLAY = {
  touched: false,
  scoreLimit: 100,
  variations: {
    digits: /\d/,
    lower: /[a-z]/,
    upper: /[A-Z]/,
    nonWords: /\W/,
  },
  minLength: 5,
  labelVisible: true,
  levels: [
    {
      label: 'Pathetically weak',
      labelColor: '#8a1600',
      activeBarColor: '#8a1600',
    },
    {
      label: 'Extremely weak',
      labelColor: '#bf2f00',
      activeBarColor: '#bf2f00',
    },
    {
      label: 'Very weak',
      labelColor: '#d64700',
      activeBarColor: '#d64700',
    },
    {
      label: 'Weak',
      labelColor: '#ff6900',
      activeBarColor: '#ff6900',
    },
    {
      label: 'So-so',
      labelColor: '#c4ad37',
      activeBarColor: '#c4ad37',
    },
    {
      label: 'Average',
      labelColor: '#d4b82a',
      activeBarColor: '#d4b82a',
    },
    {
      label: 'Fair',
      labelColor: '#ba9f16',
      activeBarColor: '#ba9f16',
    },
    {
      label: 'Strong',
      labelColor: '#0eab50',
      activeBarColor: '#0eab50',
    },
    {
      label: 'Very strong',
      labelColor: '#05873c',
      activeBarColor: '#05873c',
    },
    {
      label: 'Unbelievably strong',
      labelColor: '#02612a',
      activeBarColor: '#02612a',
    },
  ],
  wrapperStyle: {},
  barContainerStyle: {},
  barStyle: {},
  labelStyle: {},
  barColor: '#f1f3f4',
  width: deviceWidth - 20,
  score: 0,
};

const BOX_PASSWORD_STRENGTH_DISPLAY = {
  touched: false,
  scoreLimit: 100,
  variations: {
    digits: /\d/,
    lower: /[a-z]/,
    upper: /[A-Z]/,
    nonWords: /\W/,
  },
  minLength: 5,
  labelVisible: true,
  levels: [
    {
      label: 'Pathetically weak',
      labelColor: '#ff2900',
      activeBarColor: '#ff2900',
    },
    {
      label: 'Extremely weak',
      labelColor: '#ff3e00',
      activeBarColor: '#ff3e00',
    },
    {
      label: 'Very weak',
      labelColor: '#ff5400',
      activeBarColor: '#ff5400',
    },
    {
      label: 'Weak',
      labelColor: '#ff6900',
      activeBarColor: '#ff6900',
    },
    {
      label: 'So-so',
      labelColor: '#f4d744',
      activeBarColor: '#f4d744',
    },
    {
      label: 'Average',
      labelColor: '#f3d331',
      activeBarColor: '#f3d331',
    },
    {
      label: 'Fair',
      labelColor: '#f2cf1f',
      activeBarColor: '#f2cf1f',
    },
    {
      label: 'Strong',
      labelColor: '#14eb6e',
      activeBarColor: '#14eb6e',
    },
    {
      label: 'Very strong',
      labelColor: '#0af56d',
      activeBarColor: '#0af56d',
    },
    {
      label: 'Unbelievably strong',
      labelColor: '#00ff6b',
      activeBarColor: '#00ff6b',
    },
  ],
  wrapperStyle: {},
  boxContainerStyle: {},
  boxStyle: {},
  labelStyle: {},
  boxColor: '#f1f3f4',
  width: deviceWidth - 20,
  boxSpacing: 2,
};

const CIRCULAR_PASSWORD_STRENGTH_DISPLAY = {
  labelVisible: true,
  minLength: 5,
  variations: {
    digits: /\d/,
    lower: /[a-z]/,
    upper: /[A-Z]/,
    nonWords: /\W/,
  },
  minValue: 0,
  scoreLimit: 100,
  easeDuration: 500,
  levels: [
    {
      label: 'Pathetically weak',
      labelColor: '#ff2900',
      activeBarColor: '#ff2900',
    },
    {
      label: 'Extremely weak',
      labelColor: '#ff3e00',
      activeBarColor: '#ff3e00',
    },
    {
      label: 'Very weak',
      labelColor: '#ff5400',
      activeBarColor: '#ff5400',
    },
    {
      label: 'Weak',
      labelColor: '#ff6900',
      activeBarColor: '#ff6900',
    },
    {
      label: 'So-so',
      labelColor: '#f4d744',
      activeBarColor: '#f4d744',
    },
    {
      label: 'Average',
      labelColor: '#f3d331',
      activeBarColor: '#f3d331',
    },
    {
      label: 'Fair',
      labelColor: '#f2cf1f',
      activeBarColor: '#f2cf1f',
    },
    {
      label: 'Strong',
      labelColor: '#14eb6e',
      activeBarColor: '#14eb6e',
    },
    {
      label: 'Very strong',
      labelColor: '#0af56d',
      activeBarColor: '#0af56d',
    },
    {
      label: 'Unbelievably strong',
      labelColor: '#00ff6b',
      activeBarColor: '#00ff6b',
    },
  ],
  wrapperStyle: {},
  outerCircleStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  innerCircleStyle: {},
  labelWrapperStyle: {},
  labelStyle: {},
  labelNoteStyle: {},
};

const TEXT_PASSWORD_STRENGTH_DISPLAY = {
  touched: false,
  scoreLimit: 100,
  variations: {
    digits: /\d/,
    lower: /[a-z]/,
    upper: /[A-Z]/,
    nonWords: /\W/,
  },
  minLength: 5,
  labelVisible: true,
  levels: [
    {
      label: 'Pathetically weak',
      labelColor: '#ff2900',
      activeBarColor: '#ff2900',
    },
    {
      label: 'Extremely weak',
      labelColor: '#ff3e00',
      activeBarColor: '#ff3e00',
    },
    {
      label: 'Very weak',
      labelColor: '#ff5400',
      activeBarColor: '#ff5400',
    },
    {
      label: 'Weak',
      labelColor: '#ff6900',
      activeBarColor: '#ff6900',
    },
    {
      label: 'So-so',
      labelColor: '#f4d744',
      activeBarColor: '#f4d744',
    },
    {
      label: 'Average',
      labelColor: '#f3d331',
      activeBarColor: '#f3d331',
    },
    {
      label: 'Fair',
      labelColor: '#f2cf1f',
      activeBarColor: '#f2cf1f',
    },
    {
      label: 'Strong',
      labelColor: '#14eb6e',
      activeBarColor: '#14eb6e',
    },
    {
      label: 'Very strong',
      labelColor: '#0af56d',
      activeBarColor: '#0af56d',
    },
    {
      label: 'Unbelievably strong',
      labelColor: '#00ff6b',
      activeBarColor: '#00ff6b',
    },
  ],
  wrapperStyle: {},
  labelStyle: {},
};

const PASSWORD_INPUT = {
  defaultPassword: '',
  containerWrapperStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  inputWrapperStyle: {},
  inputStyle: {},
  placeholderStyle: {},
  meterType: 'bar',
  inputProps: {
    placeholder: 'Password',
    secureTextEntry: true,
  },
  // Required only to return score from the Input Component
  passwordProps: {
    minLength: 5,
    scoreLimit: 100,
    levels: [
      {
        label: 'Pathetically weak',
        labelColor: '#ff2900',
        activeBarColor: '#ff2900',
      },
      {
        label: 'Extremely weak',
        labelColor: '#ff3e00',
        activeBarColor: '#ff3e00',
      },
      {
        label: 'Very weak',
        labelColor: '#ff5400',
        activeBarColor: '#ff5400',
      },
      {
        label: 'Weak',
        labelColor: '#ff6900',
        activeBarColor: '#ff6900',
      },
      {
        label: 'So-so',
        labelColor: '#f4d744',
        activeBarColor: '#f4d744',
      },
      {
        label: 'Average',
        labelColor: '#f3d331',
        activeBarColor: '#f3d331',
      },
      {
        label: 'Fair',
        labelColor: '#f2cf1f',
        activeBarColor: '#f2cf1f',
      },
      {
        label: 'Strong',
        labelColor: '#14eb6e',
        activeBarColor: '#14eb6e',
      },
      {
        label: 'Very strong',
        labelColor: '#0af56d',
        activeBarColor: '#0af56d',
      },
      {
        label: 'Unbelievably strong',
        labelColor: '#00ff6b',
        activeBarColor: '#00ff6b',
      },
    ],
  },
};

export {
  BAR_PASSWORD_STRENGTH_DISPLAY,
  BOX_PASSWORD_STRENGTH_DISPLAY,
  CIRCULAR_PASSWORD_STRENGTH_DISPLAY,
  TEXT_PASSWORD_STRENGTH_DISPLAY,
  PASSWORD_INPUT,
};
