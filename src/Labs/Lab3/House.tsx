export default function House() {
    const house = {
        bedrooms: 4,
        bathrooms: 2.5,
        sqaureFeet: 2000,
        address: {
            street: "Via Roman",
            city: "Roma",
            state: "RM",
            zip: "00100",
            country: "Italy",
        },
        owners: ["Alice", "Bob"],
    };
    console.log(house);
    return (
        <div id="wd-house">
            <h4>House</h4>
            <h5>Bedrooms</h5>
            {house.bedrooms}
            <h5>Bathrooms</h5>
            {house.bathrooms}
            <h5>Data</h5>
            <pre>{JSON.stringify(house, null, 2)}</pre>
        </div>
    )
}