const { PI } = Math;

export function area(r) { return PI * r * r; }

export function circumference(r) { return 2 * PI * r; }

export default function (r) {
  return {
    area() {
      return PI * r * r;
    },
    circumference() {
      return 2 * PI * r;
    }
  }
};
 