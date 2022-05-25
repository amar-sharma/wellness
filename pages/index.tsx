import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/initSupabase';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const [session, setSession] = useState<any>(null);
  const router = useRouter();
  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    if (!session) {
      router.push('/login');
    }
  }, []);

  if (session) return <div>Dashboard </div>;
  else {
    return <></>;
  }
};

export default Home;
