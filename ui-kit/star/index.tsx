import * as React from 'react';

import { Star } from './star';
import { StarBox } from './star.style';

import { COLORS } from './const';

type Props = {
  repeat: number,
  color: string,
  activeColor: string,
  activeStar: string
}

type State = {
  rating: number
};

class StarRating extends React.Component<Props, State> {
  static defaultProps = {
    repeat: 5,
    color: COLORS.YELLOW,
    activeColor: COLORS.ORANGE,
    activeStar: 0
  }

  state = {
    rating: 0
  };

  componentDidMount() {
    //TODO: load rating service
  }

  onClick = (rating: number) : void => this.setState({ rating })

  renderStar = (repeat: number) : JSX.Element[] => [...new Array(repeat).fill(null)].map((item, rate) => 
    <Star
      selected={this.state.rating > rate}
      onClick={() => this.onClick(rate + 1)}
      color={this.props.color}
      activeColor={this.props.activeColor}
    />
  );

  render() {
    const { repeat, color, activeColor } = this.props;
    const { rating } = this.state;

    return (
      <StarBox
        color={color}
        activeColor={activeColor}
      >
        Звезды {`${rating} из  ${repeat}`}
        {this.renderStar(repeat)}
      </StarBox>
    )
  }
}

export { StarRating }
