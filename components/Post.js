import React, {Component} from 'react';
import User from './User';
export default class Post extends Component {
	render() {
		return(
			<div className="post">
				<User src="http://wallpapers-image.ru/oboi/wallpapers/wallpapers-men-03.jpg" alt="Man" name="Prince_Harry"/>
				<img src={this.props.src} alt={this.props.alt}></img>
				<div className="post__name">
					New post
				</div>
				<div className="post__descr">
					Post description}
				</div>
			</div>
		)
	}
}