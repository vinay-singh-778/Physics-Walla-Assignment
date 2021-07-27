function DistrictPage(props) {
    return (
        <div>
            {props.match.params.stateName}
            {props.match.params.districtName}
        </div>
    )
}

export default DistrictPage
