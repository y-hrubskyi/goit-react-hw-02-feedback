import { Component } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './App.styled';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((total, item) => total + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return ((good * 100) / total).toFixed(0);
  };

  handleClick = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  render() {
    const { state } = this;
    const total = this.countTotalFeedback();

    return (
      <Layout>
        <GlobalStyle />

        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              stats={state}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Layout>
    );
  }
}
