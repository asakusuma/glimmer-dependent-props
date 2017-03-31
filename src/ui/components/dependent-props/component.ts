import Component, { tracked } from "@glimmer/component";

export default class DependentProps extends Component {
  @tracked
  count: number = 0;
  constructor(options) {
    super(options);
    setInterval(() => {
      this.count++;
    }, 500);
  }
}
