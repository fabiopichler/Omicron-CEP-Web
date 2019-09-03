import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../../../../store/IRootState';

const mapStateToProps = ({ addressState }: IRootState) => ({ addressState });

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({
    },
    dispatch
);

export const AddressHistoryPageContainer = connect(mapStateToProps, mapDispatchToProps);
