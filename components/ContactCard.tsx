import { Card, CardContent } from './ui/card';

export default function ContactCard() {
  return (
    <Card className="mb-8 border-[1px] shadow-sm">
      <CardContent>
        <div className="text-center text-lg font-medium text-gray-900 dark:text-gray-100">
          <p>긴 글 읽어주셔서 감사합니다.</p>
          <p className="mt-2 text-base font-normal text-gray-600 dark:text-gray-300">
            더 궁금하신 내용이 있으시다면,
            <br />
            <a
              href="mailto:bangdori8865@gmail.com"
              className="font-semibold text-black underline underline-offset-2 dark:text-gray-300 dark:hover:text-gray-700"
            >
              bangdori8865@gmail.com
            </a>
            으로 연락주시면 감사하겠습니다.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
