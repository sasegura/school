export default function TakeATour() {
	return (
		<section className='take_tour_1'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-sm-12 col-md-6 col-lg-8'>
						<div
							className='video_img wow fadeIn'
							data-wow-duration='2s'
							data-wow-delay='.2s'
						>
							<img src='assets/images/video.png' alt='' className='img-fluid' />
						</div>
					</div>
					<div className='col-12 col-sm-12 col-md-6 col-lg-4 pl-1'>
						<div className='tour_video_content'>
							<h2
								className='wow fadeIn'
								data-wow-duration='2s'
								data-wow-delay='.2s'
							>
								Take a tour
							</h2>
							<p
								className='wow fadeIn'
								data-wow-duration='2s'
								data-wow-delay='.3s'
							>
								At vero eos et accusamus et iusto odio dignissimos ducimus qui
								blanditiis corrupti quos dolores et quas molestias excepturi
								sint occaecati cupiditate
							</p>
							<p
								className='wow fadeIn'
								data-wow-duration='2s'
								data-wow-delay='.4s'
							>
								non provident, similique sunt in culpa qui officia deserunt
								mollitia animi fuga.
							</p>
							<div
								className='video_wrapper  wow fadeIn'
								data-wow-duration='2s'
								data-wow-delay='.5s'
							>
								<div className='video-play-btn'>
									<span>
										<a
											href='https://www.youtube.com/watch?v=VaZ_B4HeewU'
											className='video-iframe'
										>
											<i className='fa fa-play'></i>
											<span className='video_title'>Watch Video</span>
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
