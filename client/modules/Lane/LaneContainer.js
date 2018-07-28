import { connect } from 'react-redux';
import Lane from './Lane';
import {createLane , editLane } from './LaneActions';
import { createNote } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId => state.notes.find(note => note.id === noteId))
  };
};

const mapDispatchToProps = {
  createLane,
  editLane,
  addNote: createNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
