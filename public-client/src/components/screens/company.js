export default class Company extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const features = this.props.features;
    return (
      <div>
        <h1 className={Classes.HEADING}>Latest Features</h1>
      </div>
      <div>
        <FeatureList></FeatureList>
      </div>
    )
  }
}