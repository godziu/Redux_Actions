import uuid from uuid;

const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function createComment(text) {
    return {
        type: CREATE_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text: 'Wyedytowany tekst komentarza',
        id
    }
}

function deleteComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function thumbUpComment(votes, id) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        votes: votes++
    }
}

function thumbDownComment(votes, id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        votes: votes--
    }
}
