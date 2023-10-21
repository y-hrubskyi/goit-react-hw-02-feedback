import { Component } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

import { GlobalStyle } from './GlobalStyle';
import { AppWrapper } from './App.styled';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((total, item) => total + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return ((good * 100) / total).toFixed(0);
  };

  handleClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { state } = this;

    return (
      <AppWrapper>
        <GlobalStyle />

        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            stats={state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </AppWrapper>
    );
  }
}
