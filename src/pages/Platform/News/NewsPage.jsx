import { useState } from "react";
import { useEffect } from "react";

import { get_news } from "./../../../utils/api";

import Article from "../../../components/Article";
import Loader from "../../../components/Loader";

export default function NewsPage() {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		get_news().then(res => {
			setNews(res.data);
			setTimeout(() => {
				setLoading(false);
			}, 800);
		});
	}, []);

	return (
		<section>
			{loading ? (
				<Loader loading={loading} />
			) : news.length > 0 ? (
				news.map(({ title, text, pub_date, image }, index) => (
					<>
						<Article
							title={title}
							create_date={new Date(
								pub_date,
							).toLocaleDateString()}
							banner={image}
							text={text}
                            likes={0}
						/>
						{news.length > 1 && index !== news.length - 1 && (
							<div className="h-0.5 w-full bg-secondaryLight my-16" />
						)}
					</>
				))
			) : (
				<p>Нет новостей</p>
			)}
		</section>
	);
}
