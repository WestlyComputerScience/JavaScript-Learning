
export const PI = 3.14159; //Export allows you to export this information somewhere else

export function getCircumference(radius)
{
    return PI * 2 * radius;
}

export function getArea(radius)
{
    return PI * radius * radius;
}

export function getVolume(radius)
{
    return (4/3) * PI * radius^3;
}
