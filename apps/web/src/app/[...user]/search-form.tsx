'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

type Props = {
  defaultUser: string;
};

export function SearchForm({ defaultUser }: Props) {
  const router = useRouter();
  const [username, setUsername] = useState(defaultUser);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/${username.trim()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 w-full max-w-md">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="flex-1 px-4 py-2 rounded-md bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <button
        type="submit"
        className="px-6 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all"
      >
        Generate
      </button>
    </form>
  );
} 