import ScaleLoader from "react-spinners/ScaleLoader";

export default function Loader({ loading }) {
	return <ScaleLoader color={"#505154"} loading={loading} radius={30} height={20} margin={3}/>;
}
