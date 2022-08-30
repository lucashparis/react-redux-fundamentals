import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson}) => (
  <div>
    <strong>Módulo {activeModule.title}</strong>
    <br/>
    <span>Aula {activeLesson.title}</span>
    <hr/>
  </div>
);

export default connect (state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);