import PropTypes from "prop-types";

export default function PartyMember(props) {
    PartyMember.propTypes = {
        member: PropTypes.object,
    };

    return (
        <div className="partyMember">
            <img className="partyMemberImage" src={props.member.image} />
        </div>
    );
}
