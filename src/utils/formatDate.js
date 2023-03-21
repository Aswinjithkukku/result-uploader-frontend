import monthNames from "./monthNames";

const formatDate = (date, time = false) => {
    const dt = new Date(date);

    const string = `${
        monthNames[dt.getMonth()]
    } ${dt.getDate()}, ${dt.getFullYear()}`;

    const timeString = ` ${dt.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    })}`;

    return string + (time === true ? timeString : "");
};

export default formatDate;
