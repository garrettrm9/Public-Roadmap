export default class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const features = this.props.features;
    return (
      <div>
        <h1 className={Classes.HEADING}>{this.props.product}</h1>
      </div>
      <div>
        <FilteredFeatureList></FilteredFeatureList>
      </div>
    )
  }
}