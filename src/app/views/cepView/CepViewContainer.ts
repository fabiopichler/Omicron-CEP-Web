import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../../../store/IRootState';

const mapStateToProps = ({ cepState }: IRootState) => ({ cepState });

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({
    },
    dispatch
);

export const CepViewContainer = connect(mapStateToProps, mapDispatchToProps);
