/* eslint import/no-unresolved: [2, { ignore: ['react-native', 'react'] }] */
import React, { Component } from 'react';
import {
  View, Animated, Text,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import scorePassword from '../utils/score-password';
import calculateAbsoluteWidth from '../utils/calculate-absolute-width';
import calculateLevel from '../utils/calculate-level';

// Style
import style from '../style';
import { BAR_PASSWORD_STRENGTH_DISPLAY } from '../constants';
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_REQUIRE_LOWERCASE = true;
const PASSWORD_REQUIRE_UPPERCASE = true;
const PASSWORD_REQUIRE_NUMBER = true;
const PASSWORD_REQUIRE_SYMBOL = true;
class BarPasswordStrengthDisplay extends Component {
  constructor(props) {
    super(props);
    this.animatedBarWidth = new Animated.Value(0);
  }

  render() {
    const {
      password,
      touched,
      scoreLimit,
      variations,
      minLength,
      labelVisible,
      levels,
      wrapperStyle,
      barContainerStyle,
      barStyle,
      labelStyle,
      barColor,
      width,
      handleScore
    } = this.props;
    const score = scorePassword(password, minLength, scoreLimit, variations);
    handleScore(scorePassword(password, minLength, scoreLimit, variations));
    const absoluteWidth = calculateAbsoluteWidth(score, width);
    const { label, labelColor, activeBarColor } = calculateLevel(score, levels);

    const characterTests = [
      {
        condition: 'At least 1 lowercase',
        regexp: /[a-z]+/,
        isRequired: PASSWORD_REQUIRE_LOWERCASE,
      },
      {
        condition: 'At least 1 uppercase',
        regexp: /[A-Z]+/,
        isRequired: PASSWORD_REQUIRE_UPPERCASE,
      },
      {
        condition: 'At least 1 number',
        regexp: /[0-9]+/,
        isRequired: PASSWORD_REQUIRE_NUMBER,
      },
      {
        condition: 'At least 1 symbol',
        regexp: /[!@#\$%\^&\*\.\(\)\_\-]+/,
        isRequired: PASSWORD_REQUIRE_SYMBOL,
      },
    ];

    let hasPassedAll = true;

    characterTests.forEach((test) => {
      if (test.isRequired) {
        if (test.regexp.test(password)) {
          // Passed this condition
        } else {
          // Failed
          hasPassedAll = false;
        }
      }
    });


    Animated.timing(this.animatedBarWidth, {
      toValue: absoluteWidth,
      duration: 700,
      useNativeDriver: false
    }).start();
    return (
      <>
       <View style={[style.wrapper, wrapperStyle]}>
        <View style={[style.barContainer, barContainerStyle, { backgroundColor: barColor, width }]}>
          <Animated.View
            style={[
              style.bar,
              barStyle,
              { width: this.animatedBarWidth, backgroundColor: activeBarColor },
            ]}
          />
        </View>
        {labelVisible && (touched || score !== 0)
          ? <Text style={[style.label, labelStyle, { color: labelColor }]}>{label}</Text>
          : null
        }
        {labelVisible && (touched || score !== 0) && (score < 70 || !hasPassedAll || password.length<PASSWORD_MIN_LENGTH)
          ? <View style={{height: 85, marginTop: 15, textAlign:'justify'}}><Text style={[style.label, { color: '#828282'}]}>Your password is easily guessed. Try making your password longer. Include at least one special character, one uppercase, one lowercase and one number.</Text></View>
          : null
        }
      </View>
      </>
    );
  }
}

BarPasswordStrengthDisplay.defaultProps = BAR_PASSWORD_STRENGTH_DISPLAY;

BarPasswordStrengthDisplay.propTypes = {
  password: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  scoreLimit: PropTypes.number,
  variations: PropTypes.object,
  minLength: PropTypes.number,
  labelVisible: PropTypes.bool,
  levels: PropTypes.array,
  wrapperStyle: PropTypes.object,
  barContainerStyle: PropTypes.object,
  barStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  barColor: PropTypes.string,
  width: PropTypes.number,
  handleScore: PropTypes.func,
};

export default BarPasswordStrengthDisplay;
