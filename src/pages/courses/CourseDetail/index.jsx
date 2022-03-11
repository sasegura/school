import { useParams } from 'react-router-dom';
import Footer from '../../../Components/Footer';
import Header from '../../../Components/Header/Header';
import { courses } from '../../home/utils/courses';

export default function CourseDetail() {
	// const { courseId } = match.params;
	const { courseId } = useParams();
	const course = courses[courseId - 1];
	console.log(courseId);
	return (
		<div className='courses_details_body'>
			<Header active={'events'} />

			<section className='sub_header_banner'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-10 col-md-12 col-lg-12'>
							<div className='intro_text'>
								<h1>{course.name}</h1>
								<div className='pages_linka'>
									<a href='' title=''>
										Home
									</a>
									<a href='' title='' className='active'>
										Popular Courses
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='courses_apply_wrapper'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12 col-md-12 col-lg-12'>
							<h5>&nbsp;</h5>
							<div className='courses_apply'>
								<div className='teacher_info'>
									<div className='teacher_pro'>
										<img
											src={course?.teacherPhoto}
											alt=''
											className='img-fluid'
										/>
									</div>
									<ul>
										<li>
											Profesor:{' '}
											<a href='' title=''>
												{course.teacher}
											</a>
										</li>
										<li>
											Categoría:{' '}
											<a href='' title=''>
												{course.teacherOccupation}
											</a>
										</li>
									</ul>
								</div>
								<div className='apply_btn'>
									<a href='' title=''>
										Apply Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='courses_details_wrapper'>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-sm-12 col-md-12 col-lg-8'>
							<div className='row'>
								<div className='col-12 col-sm-12 col-md-12 col-lg-12 '>
									<div className='courses_info_content'>
										<div className='corses_banner'>
											<img
												src='images/courses/courses_details_1.jpg'
												alt=''
												className='img-fluid'
											/>
										</div>
										<div className='courses_tab_wrapper'>
											<div className='courses_details_nav_tabs'>
												<ul className='nav nav-tabs' role='tablist'>
													<li className='nav-item'>
														<a
															className='nav-link active'
															href='#information'
															role='tab'
															data-toggle='tab'
														>
															<i className='flaticon-info-sign'></i>Information
														</a>
													</li>
													<li className='nav-item'>
														<a
															className='nav-link'
															href='#curricularm'
															role='tab'
															data-toggle='tab'
														>
															<i className='flaticon-portfolio'></i>Curricularm
														</a>
													</li>
													<li className='nav-item'>
														<a
															className='nav-link'
															href='#instructor'
															role='tab'
															data-toggle='tab'
														>
															<i className='flaticon-man-user'></i>Instructor
														</a>
													</li>
													<li className='nav-item'>
														<a
															className='nav-link'
															href='#reviews'
															role='tab'
															data-toggle='tab'
														>
															<i className='flaticon-star'></i>Reviews
														</a>
													</li>
												</ul>
											</div>

											<div className='tab_contents tab-content'>
												<div
													role='tabpanel'
													className='tab-pane fade in active show'
													id='information'
												>
													<p>
														"Lorem ipsum dolor sit amet, consectetur adipiscing
														elit, sed do eiusmod tempor incididunt ut labore et
														dolore magna aliqua. Ut enim ad minim veniam, quis
														nostrud exercitation ullamco laboris nisi ut aliquip
														ex ea commodo consequat. Duis aute irure dolor in
														reprehenderit in voluptate velit esse cillum dolore
														eu fugiat nulla pariatur. Excepteur sint occaecat
														cupidatat non proident, sunt in culpa qui officia
														deserunt mollit anim id est laborum."
													</p>
													<p>
														Section 1.10.32 of "de Finibus Bonorum et Malorum",
														written by Cicero in 45 BC" Sed ut perspiciatis unde
														omnis iste natus error sit voluptatem accusantium{' '}
													</p>
													<p>
														doloremque laudantium, totam rem aperiam, eaque ipsa
														quae ab illo inventore veritatis et quasi architecto
														beatae vitae dicta sunt explicabo.
													</p>
												</div>
												<div
													role='tabpanel'
													className='tab-pane fade'
													id='curricularm'
												>
													<div className='curriculum-text-box'>
														<div className='curriculum-section'>
															<div className='panel-group' id='accordion'>
																<div className='panel panel-default'>
																	<div className='panel-heading'>
																		<h4 className='panel-title click'>
																			<a
																				data-toggle='collapse'
																				data-parent='#accordion'
																				href='#collapse1'
																				className=''
																			>
																				1. Welcome to the Courses
																				<span>0/5</span>
																			</a>
																		</h4>
																	</div>
																	<div
																		id='collapse1'
																		className='panel-collapse collapse in show'
																	>
																		<div className='panel-body'>
																			<div className='curriculum-single'>
																				<div className='lecture'>
																					<span>
																						<i className='fa fa-file-text-o'></i>
																						Lecture 2. 1
																					</span>
																					<span>
																						<i className='fa fa-clock-o'></i>
																						Duration: 30mins
																					</span>
																				</div>
																				<a href=''>Preview</a>
																			</div>
																			<div className='curriculum-single'>
																				<div className='lecture'>
																					<span>
																						<i className='fa fa-file-text-o'></i>
																						Lecture 2. 1
																					</span>
																					<span>
																						<i className='fa fa-clock-o'></i>
																						Duration: 30mins
																					</span>
																				</div>
																				<a href=''>Preview</a>
																			</div>
																			<div className='curriculum-single'>
																				<div className='lecture'>
																					<span>
																						<i className='fa fa-file-text-o'></i>
																						Lecture 2. 1
																					</span>
																					<span>
																						<i className='fa fa-clock-o'></i>
																						Duration: 30mins
																					</span>
																				</div>
																				<a href=''>Preview</a>
																			</div>
																			<div className='curriculum-single'>
																				<div className='lecture'>
																					<span>
																						<i className='fa fa-file-text-o'></i>
																						Lecture 2. 1
																					</span>
																					<span>
																						<i className='fa fa-clock-o'></i>
																						Duration: 30mins
																					</span>
																				</div>
																				<a href=''>Preview</a>
																			</div>
																			<div className='curriculum-single'>
																				<div className='lecture'>
																					<span>
																						<i className='fa fa-file-text-o'></i>
																						Lecture 2. 1
																					</span>
																					<span>
																						<i className='fa fa-clock-o'></i>
																						Duration: 30mins
																					</span>
																				</div>
																				<a href=''>Preview</a>
																			</div>
																		</div>
																	</div>
																</div>
																<div className='panel panel-default'>
																	<div className='panel-heading'>
																		<h4 className='panel-title'>
																			<a
																				data-toggle='collapse'
																				data-parent='#accordion'
																				href='#collapse2'
																				className='collapsed'
																			>
																				2. How to use Wordpress<span>0/4</span>
																			</a>
																		</h4>
																	</div>
																	<div
																		id='collapse2'
																		className='panel-collapse collapse'
																	>
																		<div className='panel-body'>
																			<div className='curriculum-single'>
																				<div className='lecture'>
																					<span>
																						<i className='fa fa-file-text-o'></i>
																						Lecture 2. 1
																					</span>
																					<span>
																						<i className='fa fa-clock-o'></i>
																						Duration: 30mins
																					</span>
																				</div>
																				<a href=''>Preview</a>
																			</div>
																			<div className='curriculum-single'>
																				<div className='lecture'>
																					<span>
																						<i className='fa fa-file-text-o'></i>
																						Lecture 2. 1
																					</span>
																					<span>
																						<i className='fa fa-clock-o'></i>
																						Duration: 30mins
																					</span>
																				</div>
																				<a href=''>Preview</a>
																			</div>
																			<div className='curriculum-single'>
																				<div className='lecture'>
																					<span>
																						<i className='fa fa-file-text-o'></i>
																						Lecture 2. 1
																					</span>
																					<span>
																						<i className='fa fa-clock-o'></i>
																						Duration: 30mins
																					</span>
																				</div>
																				<a href=''>Preview</a>
																			</div>
																			<div className='curriculum-single'>
																				<div className='lecture'>
																					<span>
																						<i className='fa fa-file-text-o'></i>
																						Lecture 2. 1
																					</span>
																					<span>
																						<i className='fa fa-clock-o'></i>
																						Duration: 30mins
																					</span>
																				</div>
																				<a href=''>Preview</a>
																			</div>
																		</div>
																	</div>
																</div>
																<div className='panel panel-default'>
																	<div className='panel-heading'>
																		<h4 className='panel-title'>
																			<a
																				data-toggle='collapse'
																				data-parent='#accordion'
																				href='#collapse3'
																				className='collapsed'
																			>
																				3. Final chapters<span>0/3</span>
																			</a>
																		</h4>
																	</div>
																	<div
																		id='collapse3'
																		className='panel-collapse collapse'
																	>
																		<div className='panel-body'>
																			<div className='curriculum-single'>
																				<div className='lecture'>
																					<span>
																						<i className='fa fa-file-text-o'></i>
																						Lecture 2. 1
																					</span>
																					<span>
																						<i className='fa fa-clock-o'></i>
																						Duration: 30mins
																					</span>
																				</div>
																				<a href=''>Preview</a>
																			</div>
																			<div className='curriculum-single'>
																				<div className='lecture'>
																					<span>
																						<i className='fa fa-file-text-o'></i>
																						Lecture 2. 1
																					</span>
																					<span>
																						<i className='fa fa-clock-o'></i>
																						Duration: 30mins
																					</span>
																				</div>
																				<a href=''>Preview</a>
																			</div>
																			<div className='curriculum-single'>
																				<div className='lecture'>
																					<span>
																						<i className='fa fa-file-text-o'></i>
																						Lecture 2. 1
																					</span>
																					<span>
																						<i className='fa fa-clock-o'></i>
																						Duration: 30mins
																					</span>
																				</div>
																				<a href=''>Preview</a>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div
													role='tabpanel'
													className='tab-pane fade'
													id='instructor'
												>
													<div className='courses_teacher'>
														<div className='tutor_signle'>
															<div className='tutor_pro'>
																<a href='' title=''>
																	<img
																		src='images/team/team-07.jpg'
																		alt=''
																		className='img-fluid'
																	/>
																</a>
															</div>
															<div className='teachers_name'>
																<h5>
																	<a href='' title=''>
																		Jonson Park
																	</a>
																</h5>
																<span>Associate Professor</span>
															</div>
														</div>
													</div>
												</div>
												<div
													role='tabpanel'
													className='tab-pane fade'
													id='reviews'
												>
													<div className='review-content'>
														<div className='five-star-rating'>
															<div className='rating_box_count'>
																<span className='five'>5</span>
																<ul className='list-unstyled'>
																	<li>
																		<i className='flaticon-star-1'></i>
																	</li>
																	<li>
																		<i className='flaticon-star-1'></i>
																	</li>
																	<li>
																		<i className='flaticon-star-1'></i>
																	</li>
																	<li>
																		<i className='flaticon-star-1'></i>
																	</li>
																	<li>
																		<i className='flaticon-star-1'></i>
																	</li>
																</ul>
																<span>8 Ratings</span>
															</div>
														</div>
														<div className='rating-box'>
															<div className='detailed-rating'>
																<div className='stars'>
																	<div className='key'>5 stars</div>
																	<div className='bar'>
																		<div className='full_bar'>
																			<span style={{ width: '100%' }}></span>
																		</div>
																	</div>
																	<div className='value'>8</div>
																</div>

																<div className='stars'>
																	<div className='key'>4 stars</div>
																	<div className='bar'>
																		<div className='full_bar'>
																			<span style={{ width: '0%' }}></span>
																		</div>
																	</div>
																	<div className='value'>0</div>
																</div>

																<div className='stars'>
																	<div className='key'>3 stars</div>
																	<div className='bar'>
																		<div className='full_bar'>
																			<span style={{ width: '0%' }}></span>
																		</div>
																	</div>
																	<div className='value'>0</div>
																</div>
																<div className='stars'>
																	<div className='key'>2 stars</div>
																	<div className='bar'>
																		<div className='full_bar'>
																			<span style={{ width: '0%' }}></span>
																		</div>
																	</div>
																	<div className='value'>0</div>
																</div>
																<div className='stars'>
																	<div className='key'>1 star</div>
																	<div className='bar'>
																		<div className='full_bar'>
																			<span style={{ width: '0%' }}></span>
																		</div>
																	</div>
																	<div className='value'>0</div>
																</div>
															</div>
														</div>
													</div>

													<div className='commnet-wrapper'>
														<div className='comment-list-items'>
															<div className='comment-list-wrapper'>
																<div className='comment-list'>
																	<div className='commnet_img'>
																		<img
																			src='images/team/team-02.jpg'
																			alt='member img'
																			className='img-fluid'
																		/>
																	</div>
																	<div className='comment-text'>
																		<div className='author_info d-flex justify-content-between'>
																			<a href='' className='author_name'>
																				Adam Smith
																			</a>
																			<span>2 Days Ago</span>
																		</div>
																		<div className='rating'>
																			<ul className='rating d-flex justify-content-start'>
																				<li>
																					<i className='flaticon-star-1'></i>
																				</li>
																				<li>
																					<i className='flaticon-star-1'></i>
																				</li>
																				<li>
																					<i className='flaticon-star-1'></i>
																				</li>
																				<li>
																					<i className='flaticon-star-1'></i>
																				</li>
																				<li>
																					<i className='flaticon-star-1'></i>
																				</li>
																			</ul>
																		</div>
																		<p>
																			You need to be sure there isn't anything
																			embarrassing hidden in the repeat
																			predefined chunks as necessary, making
																			this the first true generator on the
																			Internet.
																		</p>
																	</div>
																</div>
															</div>
															<div className='comment-list-wrapper'>
																<div className='comment-list'>
																	<div className='commnet_img'>
																		<img
																			src='images/team/team-04.jpg'
																			alt='member img'
																			className='img-fluid'
																		/>
																	</div>
																	<div className='comment-text'>
																		<div className='author_info d-flex justify-content-between'>
																			<a href='' className='author_name'>
																				David Martin
																			</a>
																			<span>2 Days Ago</span>
																		</div>
																		<div className='rating'>
																			<ul className='rating d-flex justify-content-start'>
																				<li>
																					<i className='flaticon-star-1'></i>
																				</li>
																				<li>
																					<i className='flaticon-star-1'></i>
																				</li>
																				<li>
																					<i className='flaticon-star-1'></i>
																				</li>
																				<li>
																					<i className='flaticon-star-1'></i>
																				</li>
																				<li>
																					<i className='flaticon-star-shape-with-half-full'></i>
																				</li>
																			</ul>
																		</div>
																		<p>
																			you need to be sure there isn't anything
																			embarrassing hidden in the repeat
																			predefined chunks as necessary, making
																			this the first true generator on the
																			Internet.
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-12 col-sm-12 col-md-12 col-lg-4'>
							<div className='row'>
								<div className='col-12 col-sm-12 col-md-6 col-lg-12'>
									<div className='recent_courses'>
										<h2>Recent Courses</h2>
										<div className='event_signle_3'>
											<div className='corses_banner'>
												<a href='' title=''>
													<img
														src='images/courses/courses-1.jpg'
														alt=''
														className='img-fluid'
													/>
												</a>
											</div>
											<div className='event_title'>
												<h4>
													<a href='' title=''>
														Mechanical Course
													</a>
												</h4>
												<p>Jonson Park</p>
											</div>
										</div>
										<div className='event_signle_3'>
											<div className='corses_banner'>
												<a href='' title=''>
													<img
														src='images/courses/courses-2.jpg'
														alt=''
														className='img-fluid'
													/>
												</a>
											</div>
											<div className='event_title'>
												<h4>
													<a href='' title=''>
														Typeface Design
													</a>
												</h4>
												<p>Adam Smith</p>
											</div>
										</div>
										<div className='event_signle_3'>
											<div className='corses_banner'>
												<a href='' title=''>
													<img
														src='images/courses/courses-3.jpg'
														alt=''
														className='img-fluid'
													/>
												</a>
											</div>
											<div className='event_title'>
												<h4>
													<a href='' title=''>
														UX Courses
													</a>
												</h4>
												<p>Alina Karlen</p>
											</div>
										</div>
										<div className='event_signle_3'>
											<div className='corses_banner'>
												<a href='' title=''>
													<img
														src='images/courses/courses-4.jpg'
														alt=''
														className='img-fluid'
													/>
												</a>
											</div>
											<div className='event_title'>
												<h4>
													<a href='' title=''>
														Agriculture course
													</a>
												</h4>
												<p>Daniel Baci</p>
											</div>
										</div>
									</div>
								</div>

								<div className='col-12 col-sm-12 col-md-6 col-lg-12'>
									<div className='events_wrapper'>
										<h2>Latest Events</h2>
										<div className='event_signle_3'>
											<div className='event_date'>
												<p>
													07
													<span>
														<br />
														Sep, 2018
													</span>
												</p>
											</div>
											<div className='event_title'>
												<h4>
													<a href='' title=''>
														Theroy of Success
													</a>
												</h4>
												<p>
													Friday 10pm to 6pm <br />
													Hitown Hall
												</p>
											</div>
										</div>
										<div className='event_signle_3'>
											<div className='event_date'>
												<p>
													07
													<span>
														<br />
														Sep, 2018
													</span>
												</p>
											</div>
											<div className='event_title'>
												<h4>
													<a href='' title=''>
														Ui/Ux Design case
													</a>
												</h4>
												<p>
													Friday 10pm to 6pm <br />
													Hitown Hall
												</p>
											</div>
										</div>
										<div className='event_signle_3'>
											<div className='event_date'>
												<p>
													07
													<span>
														<br />
														Sep, 2018
													</span>
												</p>
											</div>
											<div className='event_title'>
												<h4>
													<a href='' title=''>
														Malmo sylho co
													</a>
												</h4>
												<p>
													Friday 10pm to 6pm <br />
													Hitown Hall
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='popular_cources'>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-sm-12 col-md-12 col-lg-12'>
							<h2>Similar Courses</h2>
							<div id='latest_blog_carousel' className='owl-carousel'>
								<div
									className='review_singel wow fadeIn'
									data-wow-duration='2s'
									data-wow-delay='.1s'
								>
									<div className='blog-img'>
										<img
											src='images/blog/blog3-1.jpg'
											alt=''
											className='img-fluid'
										/>
									</div>
									<div className='blog-title'>
										<div className='shape'></div>
										<h3>User Interface design</h3>
										<span>Teacher- Jonson Park</span>
										<p>
											Lorem ipsum dolor consectetur sed do tempor incididunt ut
											laboris ut aliquip ex commodo conquat.
										</p>
										<div className='cources_btn d-flex justify-content-between'>
											<a href='' title='' className='apply_btn'>
												Apply Now
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
											<span>$250</span>
										</div>
									</div>
								</div>

								<div
									className='review_singel wow fadeIn'
									data-wow-duration='2s'
									data-wow-delay='.3s'
								>
									<div className='blog-img'>
										<img
											src='images/blog/blog3-2.jpg'
											alt=''
											className='img-fluid'
										/>
									</div>
									<div className='blog-title'>
										<div className='shape'></div>
										<h3>Micro Web design</h3>
										<span>Teacher- Adam Karnel</span>
										<p>
											Lorem ipsum dolor consectetur sed do tempor incididunt ut
											laboris ut aliquip ex commodo conquat.
										</p>
										<div className='cources_btn d-flex justify-content-between'>
											<a href='' title='' className='apply_btn'>
												Apply Now
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
											<span>$200</span>
										</div>
									</div>
								</div>

								<div
									className='review_singel wow fadeIn'
									data-wow-duration='2s'
									data-wow-delay='.5s'
								>
									<div className='blog-img'>
										<img
											src='images/blog/blog3-3.jpg'
											alt=''
											className='img-fluid'
										/>
									</div>
									<div className='blog-title'>
										<div className='shape'></div>
										<h3>Javascript Development</h3>
										<span>Teacher- David Martin</span>
										<p>
											Lorem ipsum dolor consectetur sed do tempor incididunt ut
											laboris ut aliquip ex commodo conquat.
										</p>
										<div className='cources_btn d-flex justify-content-between'>
											<a href='' title='' className='apply_btn'>
												Apply Now
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
											<span>$300</span>
										</div>
									</div>
								</div>

								<div className='review_singel'>
									<div className='blog-img'>
										<img
											src='images/blog/blog3-1.jpg'
											alt=''
											className='img-fluid'
										/>
									</div>
									<div className='blog-title'>
										<div className='shape'></div>
										<h3>Wordpress Development</h3>
										<span>Teacher- Willian Kane</span>
										<p>
											Lorem ipsum dolor consectetur sed do tempor incididunt ut
											laboris ut aliquip ex commodo conquat.
										</p>
										<div className='cources_btn d-flex justify-content-between'>
											<a href='' title='' className='apply_btn'>
												Apply Now
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
											<span>$230</span>
										</div>
									</div>
								</div>

								<div className='review_singel'>
									<div className='blog-img'>
										<img
											src='images/blog/blog3-2.jpg'
											alt=''
											className='img-fluid'
										/>
									</div>
									<div className='blog-title'>
										<div className='shape'></div>
										<h3>Deep Photography</h3>
										<span>Teacher- Jonathon Smith</span>
										<p>
											Lorem ipsum dolor consectetur sed do tempor incididunt ut
											laboris ut aliquip ex commodo conquat.
										</p>
										<div className='cources_btn d-flex justify-content-between'>
											<a href='' title='' className='apply_btn'>
												Apply Now
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
											<span>$300</span>
										</div>
									</div>
								</div>

								<div className='review_singel'>
									<div className='blog-img'>
										<img
											src='images/blog/blog3-3.jpg'
											alt=''
											className='img-fluid'
										/>
									</div>
									<div className='blog-title'>
										<div className='shape'></div>
										<h3>Electrical Engineering</h3>
										<span>Teacher- Bankimun Chuchu</span>
										<p>
											Lorem ipsum dolor consectetur sed do tempor incididunt ut
											laboris ut aliquip ex commodo conquat.
										</p>
										<div className='cources_btn d-flex justify-content-between'>
											<a href='' title='' className='apply_btn'>
												Apply Now
												<i className='flaticon-angle-arrow-pointing-to-right'></i>
											</a>
											<span>$280</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
