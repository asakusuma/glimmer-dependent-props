import Component, { tracked } from "@glimmer/component";

export default class ChildCount extends Component {
  @tracked('args.parentCount')
  get count() {
    return this.args.parentCount;
  }
}
