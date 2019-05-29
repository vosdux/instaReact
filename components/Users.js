import React from 'react';
import User from './User';
export default function Users() {
	return(
		<div className="right">
			<User src="http://wallpapers-image.ru/oboi/wallpapers/wallpapers-men-03.jpg" alt="Man" name="Prince_Harry"/>
			<div className="users__block">
			<User min src="http://wallpapers-image.ru/oboi/wallpapers/wallpapers-men-03.jpg" alt="Man" name="Prince_Harry"/>
			<User min src="http://wallpapers-image.ru/oboi/wallpapers/wallpapers-men-03.jpg" alt="Man" name="Prince_Harry"/>
			<User min src="http://wallpapers-image.ru/oboi/wallpapers/wallpapers-men-03.jpg" alt="Man" name="Prince_Harry"/>
			<User min src="http://wallpapers-image.ru/oboi/wallpapers/wallpapers-men-03.jpg" alt="Man" name="Prince_Harry"/>
			</div>
		</div>
	)
}