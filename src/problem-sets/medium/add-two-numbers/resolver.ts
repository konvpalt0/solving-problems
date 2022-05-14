// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export function listNodeFabric<ArrayType extends number>(
	array: ArrayType[]
): ListNode {
	const firstNode = new ListNode(array[0], null);
	array.reduce<ListNode>((prev, curr, index) => {
		if (index === 0) return prev;

		const newNode = new ListNode(curr, null);
		if (prev) prev.next = newNode;

		return newNode;
	}, firstNode);

	return firstNode;
}

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	return addListDigits(l1, l2);
}

function addListDigits(
	first: ListNode | null,
	second: ListNode | null,
	isPrevOverflow?: boolean
): ListNode | null {
	const firstValue: number = first?.val || 0;
	const secondValue: number = second?.val || 0;

	const sum: number = firstValue + secondValue + (isPrevOverflow ? 1 : 0);
	const isCurOverflow: boolean = sum >= 10;
	const sumDigit: number = sum >= 10 ? sum % 10 : sum;

	if (first?.next || second?.next) {
		return new ListNode(
			sumDigit,
			addListDigits(first?.next || null, second?.next || null, isCurOverflow)
		);
	}

	return new ListNode(
		sumDigit,
		isCurOverflow ? new ListNode(Math.floor(sum / 10), null) : null
	);
}

export default addTwoNumbers;
