import Button from "./Button.js";
import { useRouter } from 'next/router';


export default function PreregisterButton(props) {
    const { classes, color, children, size, simple, block, link, justIcon, ...rest } = props;
    const router = useRouter();
    return (
        <Button
        onClick={() => router.push('/login')}
        color={color}
        size="lg"
        target="_blank"
        rel="noopener noreferrer"
        >
            <i className="" />
            Pre-register Now!
        </Button>
    );
}