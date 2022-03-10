import React, { Fragment } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header/Header';
import MenuBurguer from './BurguerMenu';
import Courses from './Courses';
import Events from './Events';
import InstructorsTeam from './InstructorsTeam';
import LoginModal from './LoginModal';
import RegisterSection from './RegisterSection';
import Sponsors from './Sponsors';
import Testimonial from './Testimonial';

const Home = () => {
	return (
		<Fragment>
			<body className='loaded'>
				<Header active={'home'} />
				<div id='loader-wrapper'>
					<div id='loader'></div>
					<div className='loader-section section-left'></div>
					<div className='loader-section section-right'></div>
				</div>

				<div className='rev_slider_wrapper'>
					<div
						id='rev_slider_1'
						className='rev_slider'
						style={{ position: 'relative' }}
					>
						<ul>
							<li
								data-index='rs-1706'
								data-transition='fade'
								data-slotamount='7'
								data-hideafterloop='0'
								data-hideslideonmobile='off'
								data-easein='default'
								data-easeout='default'
								data-masterspeed='1000'
								data-rotate='0'
								data-saveperformance='off'
								data-title='Slide'
								data-param1=''
								data-param2=''
								data-param3=''
								data-param4=''
								data-param5=''
								data-param6=''
								data-param7=''
								data-param8=''
								data-param9=''
								data-param10=''
								data-description=''
							>
								<div className='slider-overlay'></div>

								<img
									src='assets/images/edificio.jpg'
									alt='Sky'
									className='rev-slidebg'
									data-bgposition='center center'
									data-bgfit='cover'
									data-bgrepeat='no-repeat'
									data-bgparallax='10'
									data-no-retina
								/>

								<div
									className='tp-caption NotGeneric-Title tp-resizeme'
									id='slide-3045-layer-1'
									data-x="['left','center','center','center']"
									data-hoffset="['0','0','0','0']"
									data-y="['middle','middle','middle','middle']"
									data-voffset="['-150','0','0','0']"
									data-fontsize="['70','70','70','45']"
									data-lineheight="['70','70','70','50']"
									data-width='none'
									data-height='none'
									data-whitespace='nowrap'
									data-type='text'
									data-responsive_offset='on'
									data-frames='[{"from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":5,"to":"o:1;","delay":0,"split":"chars","splitdelay":0.05,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
									data-textalign="['left','left','left','left']"
									data-paddingtop='[10,10,10,10]'
									data-paddingright='[0,0,0,0]'
									data-paddingbottom='[10,10,10,10]'
									data-paddingleft='[0,0,0,0]'
									style={{
										zIndex: '5',
										whiteSpace: 'nowrap',
										textTransform: 'left',
									}}
								>
									Coder Crack School
								</div>

								<div
									className='tp-caption font-lora sfb tp-resizeme letter-space-5 h-p'
									data-x="['left','center','center','center']"
									data-hoffset="['0','0','0','0']"
									data-y="['middle','middle','middle','middle']"
									data-voffset="['20','0','0','0']"
									data-fontsize="['46','46','46','46']"
									data-lineheight="['30','30','30','30']"
									data-frames='[{"from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","speed":10,"to":"o:1;","delay":0,"split":"chars","splitdelay":0.05,"ease":"Power3.easeInOut"},{"delay":"wait","speed":100,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
									style={{
										zIndex: '7',
										color: '#fff',
										fontFamily: 'Poppins, serif',
										maxWidth: 'auto',
										maxHeight: 'auto',
										whiteSpace: 'nowrap',
										fontWeight: '400',
									}}
								>
									<p>Escuela Europea de programación</p>
								</div>
							</li>

							<li
								data-index='rs-1707'
								data-transition='fade'
								data-slotamount='7'
								data-hideafterloop='0'
								data-hideslideonmobile='off'
								data-easein='default'
								data-easeout='default'
								data-masterspeed='1000'
								data-rotate='0'
								data-saveperformance='off'
								data-title='Slide'
								data-param1=''
								data-param2=''
								data-param3=''
								data-param4=''
								data-param5=''
								data-param6=''
								data-param7=''
								data-param8=''
								data-param9=''
								data-param10=''
								data-description=''
							>
								<div className='slider-overlay'></div>

								<img
									src='assets/images/aula2.jpg'
									alt='Sky'
									className='rev-slidebg'
									data-bgposition='center center'
									data-bgfit='cover'
									data-bgrepeat='no-repeat'
									data-bgparallax='10'
									data-no-retina
								/>

								<div
									className='tp-caption NotGeneric-Title tp-resizeme'
									id='slide-3045-layer-1'
									data-x="['left','center','center','center']"
									data-hoffset="['0','0','0','0']"
									data-y="['middle','middle','middle','middle']"
									data-voffset="['-150','0','0','0']"
									data-fontsize="['70','70','70','45']"
									data-lineheight="['70','70','70','50']"
									data-width='none'
									data-height='none'
									data-whitespace='nowrap'
									data-type='text'
									data-responsive_offset='on'
									data-frames='[{"from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":5,"to":"o:1;","delay":0,"split":"chars","splitdelay":0.05,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
									data-textalign="['left','left','left','left']"
									data-paddingtop='[10,10,10,10]'
									data-paddingright='[0,0,0,0]'
									data-paddingbottom='[10,10,10,10]'
									data-paddingleft='[0,0,0,0]'
									style={{
										zIndex: '5',
										whiteSpace: 'nowrap',
										textTransform: 'left',
									}}
								>
									Coder Crack School
								</div>

								<div
									className='tp-caption font-lora sfb tp-resizeme letter-space-5 h-p'
									data-x="['left','center','center','center']"
									data-hoffset="['0','0','0','0']"
									data-y="['middle','middle','middle','middle']"
									data-voffset="['20','0','0','0']"
									data-fontsize="['46','46','46','46']"
									data-lineheight="['30','30','30','30']"
									data-frames='[{"from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","speed":10,"to":"o:1;","delay":0,"split":"chars","splitdelay":0.05,"ease":"Power3.easeInOut"},{"delay":"wait","speed":100,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
									style={{
										zIndex: '7',
										color: '#fff',
										fontFamily: 'Poppins, serif',
										maxWidth: 'auto',
										maxHeight: 'auto',
										whiteSpace: 'nowrap',
										fontWeight: '400',
									}}
								>
									<p>Escuela Europea de programación....</p>
								</div>
							</li>

							<li
								data-index='rs-1708'
								data-transition='fade'
								data-slotamount='7'
								data-hideafterloop='0'
								data-hideslideonmobile='off'
								data-easein='default'
								data-easeout='default'
								data-masterspeed='1000'
								data-rotate='0'
								data-saveperformance='off'
								data-title='Slide'
								data-param1=''
								data-param2=''
								data-param3=''
								data-param4=''
								data-param5=''
								data-param6=''
								data-param7=''
								data-param8=''
								data-param9=''
								data-param10=''
								data-description=''
							>
								<div className='slider-overlay'></div>

								<img
									src='assets/images/aula.jpg'
									alt='Sky'
									className='rev-slidebg'
									data-bgposition='center center'
									data-bgfit='cover'
									data-bgrepeat='no-repeat'
									data-bgparallax='10'
									data-no-retina
								/>

								<div
									className='tp-caption NotGeneric-Title   tp-resizeme'
									id='slide-3045-layer-1'
									data-x="['left','center','center','center']"
									data-hoffset="['0','0','0','0']"
									data-y="['middle','middle','middle','middle']"
									data-voffset="['-150','0','0','0']"
									data-fontsize="['70','70','70','45']"
									data-lineheight="['70','70','70','50']"
									data-width='none'
									data-height='none'
									data-whitespace='nowrap'
									data-type='text'
									data-responsive_offset='on'
									data-frames='[{"from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":10,"split":"chars","splitdelay":0.05,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
									data-textalign="['left','left','left','left']"
									data-paddingtop='[10,10,10,10]'
									data-paddingright='[0,0,0,0]'
									data-paddingbottom='[10,10,10,10]'
									data-paddingleft='[0,0,0,0]'
									style={{
										zIndex: '5',
										whiteSpace: 'nowrap',
										textTransform: 'left',
									}}
								>
									Da el primer paso para
								</div>

								<div
									className='tp-caption NotGeneric-Title   tp-resizeme'
									id='slide-3045-layer-1'
									data-x="['left','center','center','center']"
									data-hoffset="['0','0','0','0']"
									data-y="['middle','middle','middle','middle']"
									data-voffset="['-75','0','0','0']"
									data-fontsize="['70','70','70','45']"
									data-lineheight="['70','70','70','50']"
									data-width='none'
									data-height='none'
									data-whitespace='nowrap'
									data-type='text'
									data-responsive_offset='on'
									data-frames='[{"from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":10,"split":"chars","splitdelay":0.05,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
									data-textalign="['left','left','left','left']"
									data-paddingtop='[10,10,10,10]'
									data-paddingright='[0,0,0,0]'
									data-paddingbottom='[10,10,10,10]'
									data-paddingleft='[0,0,0,0]'
									style={{
										zIndex: '5',
										whiteSpace: 'nowrap',
										textTransform: 'left',
									}}
								>
									superarte con nosotros
								</div>
							</li>
						</ul>
					</div>
				</div>

				<LoginModal />

				<MenuBurguer />

				<Courses />

				<RegisterSection />

				<Events />

				<InstructorsTeam />

				<section className='take_tour_1'>
					<div className='container'>
						<div className='row'>
							<div className='col-12 col-sm-12 col-md-6 col-lg-8'>
								<div
									className='video_img wow fadeIn'
									data-wow-duration='2s'
									data-wow-delay='.2s'
								>
									<img
										src='assets/images/video.png'
										alt=''
										className='img-fluid'
									/>
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
										At vero eos et accusamus et iusto odio dignissimos ducimus
										qui blanditiis corrupti quos dolores et quas molestias
										excepturi sint occaecati cupiditate
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

				<Testimonial />

				<Sponsors />

				<Footer />
			</body>
		</Fragment>
	);
};
export default Home;
