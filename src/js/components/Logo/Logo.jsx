import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to='/' className="rounded-md flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
			<div className="flex items-center rounded-full border-2 border-rose-400 p-1">
				<img src={require('../../assets/images/chef-hat.png')} alt="Logo" width={50} />
			</div>
		</Link>
	)
}

export default Logo